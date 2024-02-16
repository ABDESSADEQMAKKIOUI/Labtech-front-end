import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalyseDetailComponent } from './components/analyse/analyse-detail/analyse-detail.component';
import { AnalysesComponent } from './components/analyse/analyses/analyses.component';
import { AddAnalysesComponent } from './components/analyse/add-analyses/add-analyses.component';
import { UpdateAnalysesComponent } from './components/analyse/update-analyses/update-analyses.component';
import { EchantillonsComponent } from './components/echantillon/echantillons/echantillons.component';
import { EchantillonDetailComponent } from './components/echantillon/echantillon-detail/echantillon-detail.component';
import { AddEchantillonComponent } from './components/echantillon/add-echantillon/add-echantillon.component';
import { UpdateEchantillonComponent } from './components/echantillon/update-echantillon/update-echantillon.component';
import { FournisseursComponent } from './components/fournisseur/fournisseurs/fournisseurs.component';
import { FournisseurDetailComponent } from './components/fournisseur/fournisseur-detail/fournisseur-detail.component';
import { AddFournisseurComponent } from './components/fournisseur/add-fournisseur/add-fournisseur.component';
import { UpdateMaterialComponent } from './components/material/update-material/update-material.component';
import { AddMaterialComponent } from './components/material/add-material/add-material.component';
import { MaterialsComponent } from './components/material/materials/materials.component';
import { MaterialDetailComponent } from './components/material/material-detail/material-detail.component';
import { NormesComponent } from './components/norme/normes/normes.component';
import { NormeDetailsComponent } from './components/norme/norme-details/norme-details.component';
import { AddNormeComponent } from './components/norme/add-norme/add-norme.component';
import { AddNumerationComponent } from './components/numeration/add-numeration/add-numeration.component';
import { UpdateNumerationComponent } from './components/numeration/update-numeration/update-numeration.component';
import { NumerationDetailsComponent } from './components/numeration/numeration-details/numeration-details.component';
import { PatientsComponent } from './components/patient/patients/patients.component';
import { PatientDetailsComponent } from './components/patient/patient-details/patient-details.component';
import { AddPatientComponent } from './components/patient/add-patient/add-patient.component';
import { UpdatePatientComponent } from './components/patient/update-patient/update-patient.component';
import { PlanificatientsComponent } from './components/planification/planificatients/planificatients.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateurs/utilisateurs.component';
import { UtilisateurDetailsComponent } from './components/utilisateur/utilisateur-details/utilisateur-details.component';
import { AddUtilisateurComponent } from './components/utilisateur/add-utilisateur/add-utilisateur.component';
import { UpdateUtilisateurComponent } from './components/utilisateur/update-utilisateur/update-utilisateur.component';
import { ReactifsComponent } from './components/reactif/reactifs/reactifs.component';
import { UpdateReactifComponent } from './components/reactif/update-reactif/update-reactif.component';
import { ReactifDetailComponent } from './components/reactif/reactif-detail/reactif-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NumerationsComponent } from './components/numeration/numerations/numerations.component';
import { AddReactifComponent } from './components/reactif/add-reactif/add-reactif.component';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    AnalyseDetailComponent,
    AnalysesComponent,
    AddAnalysesComponent,
    UpdateAnalysesComponent,
    EchantillonsComponent,
    EchantillonDetailComponent,
    AddEchantillonComponent,
    UpdateEchantillonComponent,
    FournisseursComponent,
    FournisseurDetailComponent,
    AddFournisseurComponent,
    UpdateMaterialComponent,
    AddMaterialComponent,
    MaterialsComponent,
    MaterialDetailComponent,
    NormesComponent,
    NormeDetailsComponent,
    AddNormeComponent,
    AddNumerationComponent,
    UpdateNumerationComponent,
    NumerationDetailsComponent,
    PatientsComponent,
    PatientDetailsComponent,
    AddPatientComponent,
    UpdatePatientComponent,
    PlanificatientsComponent,
    UtilisateurComponent,
    UtilisateurDetailsComponent,
    AddUtilisateurComponent,
    UpdateUtilisateurComponent,
    ReactifsComponent,
    UpdateReactifComponent,
    ReactifDetailComponent,
    NumerationsComponent,
    AddReactifComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
