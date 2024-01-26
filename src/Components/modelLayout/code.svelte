<script>
   import { CodeBlock } from '@skeletonlabs/skeleton';
    import {selectedLayers, lossFunction, optFunction, epoch, batchSize, loss_criterion, opt_criterion, lr, lrScheduleFunction, lr_criterion, layers} from "./../../store/stores";
    let layerSelected, optimizer, lossFunc, lrSch, layersCode=[], code, schLr, forwardLayerName;
    $:layerSelected=$selectedLayers
    $:optimizer=$optFunction;
    $:lossFunc=$lossFunction;
    $:lrSch=$lrScheduleFunction;
    $:layersCode=$layers;



    $:forwardLayerName = $selectedLayers.map((l, index)=>{
        return `x = ${l.layer.toLowerCase()}_${index}(x)`
    })


    schLr = `# Learning rate scheduler
    scheduler =${$lr_criterion}`

    $:code = `
import torch
from torch import nn
from torch.utils.data import DataLoader
import torch.optim as optim

# Set device (CPU or GPU)
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

#definind Epochs and Batch size
num_epochs = ${$epoch}
batch_size = ${$batchSize}
learning_rate = ${$lr}
# defining the loss and optimization ${$lr_criterion && "and learning rate schedular"}
criterion = ${$loss_criterion}
optimizer = ${$opt_criterion}
${$lr_criterion && schLr}

# loading dataset
train_loader = DataLoader(<<train dataset>>, batch_size=batch_size, shuffle=True) # your preprocessed train dataset
val_loader = DataLoader(<<validation dataset>>, batch_size=batch_size, shuffle=False) # your preprocessed validation dataset

# Define the model
class Model(nn.Module):
    def __init__(self):
        super(Model, self).__init__()
        ${layersCode.join("\n\t\t\t")}

    def forward(self, x):
        ${forwardLayerName.join("\n\t\t\t")}
        return x


# Creating instance of model on available device
model = Model().to(device)

# Training loop
for epoch in range(num_epochs):
    # Training true labels, loss and evaluation metric
    train_loss = 0.0
    predictions_train = []
    true_labels_train = []

    #Forward pass
    model.train()

    # Backward pass + calculating gradiants + optimizing the weights
    for inputs, labels in train_loader:
        inputs, labels = inputs.to(device), labels.to(device)
        optimizer.zero_grad()
        outputs = model(inputs)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()
        train_loss += loss.item()
        predictions_train.extend(outputs.squeeze().tolist())
        true_labels_train.extend(labels.tolist())
    
    # Calculating the average loss + mertics for training labels  
    average_train_loss = train_loss / len(train_loader)
    metrics_train = your_metrics(true_labels_train, predictions_train) # assign your metrics for evaluation

    # Validation true labels, loss and evaluation metric
    val_loss = 0.0
    predictions_val = []
    true_labels_val = []

    # Validation
    model.eval()

    # Running model without gradiant calculation/ inference mode
    with torch.inference_mode():  # or torch.no_grad()
        for inputs, labels in val_loader:
            inputs, labels = inputs.to(device), labels.to(device)
            outputs = model(inputs)
            val_loss += criterion(outputs, labels.unsqueeze(1)).item()
            predictions_val.extend(outputs.squeeze().tolist())
            true_labels_val.extend(labels.tolist())


    # Calculating the average loss + mertics for validation labels  
    average_val_loss = val_loss / len(val_loader)
    metrics_val = your_metrics(true_labels_val, predictions_val) # assign your metrics for evaluation
    print(f'Epoch [{epoch + 1}/{num_epochs}], '
        f'Train Loss: {average_train_loss:.4f}, Train Metrics: {metrics_train:.4f}, '
        f'Val Loss: {average_val_loss:.4f}, Val Metrics: {metrics_val:.4f}')

    # Adjust learning rate
    ${$lr_criterion ? scheduler.step() : ""}

    `


</script>


<!-- <button class="btn btn-sm rounded-md variant-ghost-secondary text-xs mb-2 float-right mr-4 mt-4 text-slate-100" on:click={copyToClipboard}>Copy</button> -->
<CodeBlock class="whitespace-pre-wrap text-nowrap" text="text-xs" rounded="rounded-sm" code={code} language="python">
</CodeBlock>



<style>
    :global(.codeblock-pre){
        text-wrap: nowrap;
        overflow-x: scroll;
    }

</style>

<!-- import torch
import torch.nn as nn
import torch.optim as optim
from torch.optim import lr_scheduler
from torchvision import datasets, transforms
from torch.utils.data import DataLoader

# Define the CNN model
class SimpleCNN(nn.Module):
    def __init__(self):
        super(SimpleCNN, self).__init__()
        self.conv1 = nn.Conv2d(3, 64, kernel_size=3, stride=1, padding=1)
        self.relu1 = nn.ReLU()
        self.pool1 = nn.MaxPool2d(kernel_size=2, stride=2)

        self.conv2 = nn.Conv2d(64, 128, kernel_size=3, stride=1, padding=1)
        self.relu2 = nn.ReLU()
        self.pool2 = nn.MaxPool2d(kernel_size=2, stride=2)

        self.conv3 = nn.Conv2d(128, 256, kernel_size=3, stride=1, padding=1)
        self.relu3 = nn.ReLU()
        self.pool3 = nn.MaxPool2d(kernel_size=2, stride=2)

        self.fc1 = nn.Linear(256 * 4 * 4, 512)
        self.relu4 = nn.ReLU()
        self.fc2 = nn.Linear(512, 10)  # Assuming 10 classes for classification

    def forward(self, x):
        x = self.pool1(self.relu1(self.conv1(x)))
        x = self.pool2(self.relu2(self.conv2(x)))
        x = self.pool3(self.relu3(self.conv3(x)))
        x = x.view(-1, 256 * 4 * 4)
        x = self.relu4(self.fc1(x))
        x = self.fc2(x)
        return x

# Set device (CPU or GPU)
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# Load data (Assuming CIFAR-10 for simplicity)
transform = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))
])

train_dataset = datasets.CIFAR10(root='./data', train=True, transform=transform, download=True)
train_loader = DataLoader(train_dataset, batch_size=64, shuffle=True)

valid_dataset = datasets.CIFAR10(root='./data', train=False, transform=transform, download=True)
valid_loader = DataLoader(valid_dataset, batch_size=64, shuffle=False)

# Initialize model and optimizer
model = SimpleCNN().to(device)
criterion = nn.CrossEntropyLoss()
optimizer = optim.SGD(model.parameters(), lr=0.01, momentum=0.9)

# Learning rate scheduler
scheduler = lr_scheduler.StepLR(optimizer, step_size=25, gamma=0.1)

# Training loop
num_epochs = 50  # Set the number of epochs
for epoch in range(num_epochs):
    model.train()
    for inputs, labels in train_loader:
        inputs, labels = inputs.to(device), labels.to(device)
        optimizer.zero_grad()
        outputs = model(inputs)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()

    # Validation
    model.eval()
    with torch.no_grad():
        total_correct = 0
        total_samples = 0
        for inputs, labels in valid_loader:
            inputs, labels = inputs.to(device), labels.to(device)
            outputs = model(inputs)
            _, predicted = torch.max(outputs, 1)
            total_samples += labels.size(0)
            total_correct += (predicted == labels).sum().item()

        accuracy = total_correct / total_samples
        print(f'Epoch [{epoch + 1}/{num_epochs}], Loss: {loss.item():.4f}, Accuracy: {accuracy:.4f}')

    # Adjust learning rate
    scheduler.step() -->



    