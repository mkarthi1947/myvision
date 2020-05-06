import { constructCanvas } from './canvas/canvas';
import initialiseToolkit from './tools/toolkit/init';
import initialiseLabellerModal from './tools/labellerModal/buttons';
import { initialiseUploadDatasetsModal } from './tools/uploadDatasetsModal/views/viewManager';
import { initialiseMachineLearningModal } from './tools/machineLearningModal/views/viewManager';
import initialiseExportLabelsPopUp from './tools/exportDatasetsPopup/buttonClickEvents';
import { initialiseSettingsPopup } from './tools/settingsPopup/buttonClickEvents';
import assignPassiveEventListeners from './tools/passiveEventListeners/passiveEventListeners';
import initialiseShapeManipulationDeltas from './canvas/objects/deltaValueSetters/initialiseShapeManipulationDeltas';
import { initialiseCoreButtonPopovers } from './tools/globalStyling/coreButtons/popovers';
import { initialiseGlobalStyleSetup } from './tools/globalStyling/style';
import { initialiseLabelListFunctionality } from './tools/labelList/labelList';
import { initialiseImageListFunctionality } from './tools/imageList/imageList';
import { initialiseRemoveImagesFunctionality } from './tools/imageList/removeImages/removeImages';
import { initialiseImageSwitchPanelFunctionality } from './tools/imageSwitchPanel/style';
import registerGlobalKeyEventHandlers from './keyEventHandlers/keyEventHandlers';

constructCanvas();
initialiseToolkit();
initialiseLabellerModal();
initialiseSettingsPopup();
initialiseCoreButtonPopovers();
initialiseUploadDatasetsModal();
initialiseMachineLearningModal();
initialiseExportLabelsPopUp();
assignPassiveEventListeners();
initialiseGlobalStyleSetup();
initialiseLabelListFunctionality();
initialiseImageListFunctionality();
initialiseRemoveImagesFunctionality();
initialiseImageSwitchPanelFunctionality();
registerGlobalKeyEventHandlers();
initialiseShapeManipulationDeltas();
