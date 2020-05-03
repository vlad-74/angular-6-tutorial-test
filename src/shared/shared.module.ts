import { NgModule } from '@angular/core';
import { CommonModule, NgSwitch } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { MainRoutes } from '../Main/main.routes';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';
import { DynamicFormComponent } from './Components/dynamic-form/dynamic-form.component';
import { DynamicInputFormComponent } from './Components/dynamic-form/dynamic-input-field/dynamic-input-field.component';
import { DynamicCheckboxFieldComponent } from './Components/dynamic-form/dynamic-checkbox-field/dynamic-checkbox-field.component';
import { DynamicPasswordFieldComponent } from './Components/dynamic-form/dynamic-password-field/dynamic-password-field.component';
import { DynamicEmailFieldComponent } from './Components/dynamic-form/dynamic-email-field/dynamic-email-field.component';
import { DynamicRadioFieldComponent } from './Components/dynamic-form/dynamic-radio-field/dynamic-radio-field.component';
import { DynamicLabelComponent } from './Components/dynamic-form/dynamic-label/dynamic-label.component';
import { DynamicDatepickerFieldComponent } from './Components/dynamic-form/dynamic-datepicker-field/dynamic-datepicker-field.component';
import { DynamicNumberFieldComponent } from './Components/dynamic-form/dynamic-number-field/dynamic-number-field.component';
import { DynamicGroupComponent } from './Components/dynamic-form/dynamic-group/dynamic-group.component';
import { DynamicSelectFieldComponent } from './Components/dynamic-form/dynamic-select-field/dynamic-select-field.component';
import { DynamicErrorComponent } from './Components/dynamic-form/dynamic-error/dynamic-error.component';
// import {
//   MAT_DATE_LOCALE, MatAutocompleteModule, MatDatepickerModule, MatDialogModule, MatIconModule, MatInputModule,
//   MatMenuModule,
//   MatProgressSpinnerModule, MatSelectModule, MatTabsModule
// } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ErrorMessagesService } from './Services/error-messages.service';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchFieldComponent } from './Components/search-field/search-field.component';
import { FileUDService } from './Services/file-ud.service';
import { PhotoMiniatureComponent } from './Components/photo-miniature/photo-miniature.component';
import { TabSwitcherComponent } from './Components/tab-switcher/tab-switcher.component';
import { DialogAlertComponent } from './Components/dialog-alert/dialog-alert.component';
import { DialogConfirmComponent } from './Components/dialog-confirm/dialog-confirm.component';
import { DialogModalComponent } from './Components/dialog-modal/dialog-modal.component';
import { DialogService } from './Services/dialog.service';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { VideoComponent } from './Components/video/video.component';
import { SelectionComponent } from './Components/selection/selection.component';
// import { InspectionPlaceComponent } from '../Main/Components/contract-summary/inspection-place/inspection-place.component';
import { DynamicTextareaFieldComponent } from './Components/dynamic-form/dynamic-textarea-field/dynamic-textarea-field.component';
import { NumberFormatterDirective } from './Directives/number-formatter.directive';
import { IfHasAccessDirective } from './Directives/if-has-access.directive';
// import { EvaluationModalViewComponent } from '../Main/Components/complaints-page/evaluation-modal-view/evaluation-modal-view.component';
import {
  DynamicDatetimepickerFieldComponent,
  DynamicDatetimepickerValueaccessorComponent
} from './Components/dynamic-form/dynamic-datetimepicker-field/dynamic-datetimepicker-field.component';
import { OverflowTittleDirective } from './Directives/overflow-tittle.directive';
import { NavigatorGuard } from './Guards/navigator.guard';
import { DynamicAutocompleteFieldComponent } from './Components/dynamic-form/dynamic-autocomplete-field/dynamic-autocomplete-field.component';
import { ExitMenuComponent } from './Components/navigation-bar/exit-menu/exit-menu.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    // MatProgressSpinnerModule,
    // MatDatepickerModule,
    // MatMomentDateModule,
    // MatIconModule,
    // MatInputModule,
    // MatMenuModule,
    // MatTabsModule,
    // MatSelectModule,
    // MatAutocompleteModule,
    // FlexLayoutModule,
    // MatDialogModule
  ],
  providers: [
    // {provide: MAT_DATE_LOCALE, useValue: 'ru-RU'},
    ErrorMessagesService,
    FileUDService,
    DialogService,
    NavigatorGuard
  ],
  declarations: [
    NavigationBarComponent,
    DynamicFormComponent,
    DynamicInputFormComponent,
    DynamicCheckboxFieldComponent,
    DynamicPasswordFieldComponent,
    DynamicEmailFieldComponent,
    DynamicSelectFieldComponent,
    DynamicGroupComponent,
    DynamicRadioFieldComponent,
    DynamicErrorComponent,
    DynamicNumberFieldComponent,
    DynamicLabelComponent,
    DynamicDatepickerFieldComponent,
    SpinnerComponent,
    SearchFieldComponent,
    PhotoMiniatureComponent,
    TabSwitcherComponent,
    DialogAlertComponent,
    DialogConfirmComponent,
    DialogModalComponent,
    GalleryComponent,
    VideoComponent,
    SelectionComponent,
    DynamicTextareaFieldComponent,
    NumberFormatterDirective,
    DynamicDatetimepickerFieldComponent,
    DynamicDatetimepickerValueaccessorComponent,
    OverflowTittleDirective,
    IfHasAccessDirective,
    DynamicAutocompleteFieldComponent,
    ExitMenuComponent
  ],
  entryComponents: [
    DialogAlertComponent,
    DialogConfirmComponent,
    DialogModalComponent,
    GalleryComponent,
    VideoComponent,
    // InspectionPlaceComponent,
    // EvaluationModalViewComponent
  ],
  exports: [
    NavigationBarComponent,
    DynamicFormComponent,
    SpinnerComponent,
    SearchFieldComponent,
    PhotoMiniatureComponent,
    TabSwitcherComponent,
    SelectionComponent,
    IfHasAccessDirective,
    OverflowTittleDirective
  ]
})
export class SharedModule {
}
