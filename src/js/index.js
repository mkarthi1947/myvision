import { registerHotKeys } from './keyEvents/keyboard/hotKeys';
import registerWindowMouseEvents from './keyEvents/mouse/registerEvents';

import { findUserOS } from './tools/OS/OSManager';
import { constructCanvas } from './canvas/canvas';
import initialiseToolkit from './tools/toolkit/init';
import initialiseWelcomeModal from './tools/welcomeModal/init';
import initialiseLabellerModal from './tools/labellerModal/buttons';
import { initialiseUploadDatasetsModal } from './tools/uploadDatasetsModal/views/viewManager';
import { initialiseMachineLearningModal } from './tools/machineLearningModal/views/viewManager';
import initialiseExportDatasetsPopup from './tools/exportDatasetsPopup/init';
import initialiseSettingsPopup from './tools/settingsPopup/init';
import assignPassiveEventListeners from './tools/passiveEventListeners/passiveEventListeners';
import initialiseShapeManipulationDeltas from './canvas/objects/deltaValueSetters/initialiseShapeManipulationDeltas';
import initialiseImageListFunctionality from './tools/imageList/init';
import initialiseRemoveImagesModal from './tools/imageList/removeImages/modal/init';
import { initialiseCoreButtonPopovers } from './tools/globalStyling/buttons/popovers';
import { applyStyling } from './tools/globalStyling/style';
import { initialiseLabelListFunctionality } from './tools/labelList/labelList';
import { initialiseImageSwitchPanelFunctionality } from './tools/imageSwitchPanel/style';
import { initialiseWindowDimService } from './tools/dimWindow/dimWindowService';

findUserOS();
applyStyling();
constructCanvas();
registerHotKeys();
initialiseToolkit();
initialiseLabellerModal();
initialiseSettingsPopup();
registerWindowMouseEvents();
initialiseWindowDimService();
initialiseCoreButtonPopovers();
initialiseExportDatasetsPopup();
initialiseUploadDatasetsModal();
initialiseMachineLearningModal();
assignPassiveEventListeners();
initialiseRemoveImagesModal();
initialiseImageListFunctionality();
initialiseLabelListFunctionality();
initialiseImageSwitchPanelFunctionality();
initialiseShapeManipulationDeltas();
initialiseWelcomeModal();
