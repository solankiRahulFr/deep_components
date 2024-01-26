import { writable, readable, derived } from "svelte/store";


export const selectedLayers = writable([]);
export const lossFunction = writable([]);
export const optFunction = writable([]);
export const lrScheduleFunction = writable([]);
export const epoch = writable(25);
export const batchSize = writable(32);
export const lr = writable(0.01);
export const alloptLayers = readable(['Adadelta', 'Adagrad', 'Adam', 'AdamW', 'SparseAdam', 'Adamax', 'ASGD', 'SGD', 'RAdam', 'Rprop', 'RMSprop', 'Optimizer', 'NAdam', 'LBFGS'])
export const alllossLayers = readable(['L1Loss', 'NLLLoss', 'KLDivLoss', 'MSELoss', 'BCELoss', 'BCEWithLogitsLoss', 'NLLLoss2d', 'PoissonNLLLoss', 'CosineEmbeddingLoss', 'CTCLoss', 'HingeEmbeddingLoss', 'MarginRankingLoss', 'MultiLabelMarginLoss', 'MultiLabelSoftMarginLoss', 'MultiMarginLoss', 'SmoothL1Loss', 'GaussianNLLLoss', 'HuberLoss', 'SoftMarginLoss', 'CrossEntropyLoss', 'TripletMarginLoss', 'AdaptiveLogSoftmaxWithLoss', 'TripletMarginWithDistanceLoss'])
export const allLrSchedulerLayers = readable(['ConstantLR', 'CosineAnnealingLR', 'CosineAnnealingWarmRestarts', 'CyclicLR', 'ExponentialLR', 'LambdaLR', 'LinearLR', 'MultiStepLR', 'MultiplicativeLR', 'OneCycleLR', 'PolynomialLR', 'ReduceLROnPlateau', 'SequentialLR', 'StepLR'])


export const layers = derived(selectedLayers,($selectedLayers)=>{
    let tparam, lay=[];
    if($selectedLayers){
        if($selectedLayers.length>0){
            $selectedLayers.forEach((el, index) => {
                if(el.changedParam){
                    tparam = el.changedParam.map(ch=>{
                        for(const p of el.parameters){
                            if(p.name==ch){
                                return `${p.name}= ${p.default}`
                            }
                        }
                    })
                    lay.push(`self.${el.layer.toLowerCase()}_${index} = nn.${el.layer}(${tparam.join(", ")})`)
                }else{
                    lay.push(`self.${el.layer.toLowerCase()}_${index} = nn.${el.layer}()`) 
                }
            });
            return lay
        }else{
            return [`#Layers not selected`]
        }}
    }) 



export const loss_criterion = derived(lossFunction,($lossFunction)=>{
    let tparam;
    if($lossFunction){
        if($lossFunction.length>0){
            if($lossFunction[0].changedParam){
                tparam = $lossFunction[0].changedParam.map(ch=>{
                    for(const p of $lossFunction[0].parameters){
                        if(p.name==ch){
                            return `${p.name}= ${p.default}`
                        }
                    }
                })
                return `nn.${$lossFunction[0].layer}(${tparam.join(", ")})`
            }
        else{
            return `nn.${$lossFunction[0].layer}()`
        }}else{
            return `#Loss not selected`
        }
        }
}) 


export const opt_criterion = derived(optFunction,($optFunction)=>{
    let tparam;
    if($optFunction){
        if($optFunction.length>0){
            if($optFunction[0].changedParam){
                tparam = $optFunction[0].changedParam.map(ch=>{
                    for(const p of $optFunction[0].parameters){
                        if(p.name==ch){
                            return `${p.name}= ${p.default}`
                        }
                    }
                })
                return `optim.${$optFunction[0].layer}(${tparam.join(", ")})`
            }
        else{
            return `optim.${$optFunction[0].layer}(model.parameters(), lr=learning_rate)`
        }}else{
            return `#optimizer not selected`
        }
        }
}) 


export const lr_criterion = derived(lrScheduleFunction,($lrScheduleFunction)=>{
    let tparam;
    if($lrScheduleFunction){
        if($lrScheduleFunction.length>0){
            if($lrScheduleFunction[0].changedParam){
                tparam = $lrScheduleFunction[0].changedParam.map(ch=>{
                    for(const p of $lrScheduleFunction[0].parameters){
                        if(p.name==ch){
                            return `${p.name}: ${p.default}`
                        }
                    }
                })
                return `optim.lr_scheduler.${$lrScheduleFunction[0].layer}(${tparam.join(", ")})`
            }
        else{
            return `optim.lr_scheduler.${$lrScheduleFunction[0].layer}(optimizer, lr=learning_rate)`
        }}else{
            return ``
        }
        }
}) 

