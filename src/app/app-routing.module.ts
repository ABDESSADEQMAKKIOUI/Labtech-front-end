import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnalysesComponent} from "./components/analyse/analyses/analyses.component";
import {AnalyseDetailComponent} from "./components/analyse/analyse-detail/analyse-detail.component";
import {AddAnalysesComponent} from "./components/analyse/add-analyses/add-analyses.component";
import {UpdateAnalysesComponent} from "./components/analyse/update-analyses/update-analyses.component";
import {EchantillonsComponent} from "./components/echantillon/echantillons/echantillons.component";
import {AddEchantillonComponent} from "./components/echantillon/add-echantillon/add-echantillon.component";
import {UpdateEchantillonComponent} from "./components/echantillon/update-echantillon/update-echantillon.component";
import {EchantillonDetailComponent} from "./components/echantillon/echantillon-detail/echantillon-detail.component";
import {PatientsComponent} from "./components/patient/patients/patients.component";
import {PatientDetailsComponent} from "./components/patient/patient-details/patient-details.component";
import {AddPatientComponent} from "./components/patient/add-patient/add-patient.component";
import {UpdatePatientComponent} from "./components/patient/update-patient/update-patient.component";
import {FournisseursComponent} from "./components/fournisseur/fournisseurs/fournisseurs.component";
import {FournisseurDetailComponent} from "./components/fournisseur/fournisseur-detail/fournisseur-detail.component";
import {AddFournisseurComponent} from "./components/fournisseur/add-fournisseur/add-fournisseur.component";
import {MaterialsComponent} from "./components/material/materials/materials.component";
import {MaterialDetailComponent} from "./components/material/material-detail/material-detail.component";
import {AddMaterialComponent} from "./components/material/add-material/add-material.component";
import {UpdateMaterialComponent} from "./components/material/update-material/update-material.component";
import {NormesComponent} from "./components/norme/normes/normes.component";
import {NormeDetailsComponent} from "./components/norme/norme-details/norme-details.component";
import {AddNormeComponent} from "./components/norme/add-norme/add-norme.component";
import {NumerationDetailsComponent} from "./components/numeration/numeration-details/numeration-details.component";
import {AddNumerationComponent} from "./components/numeration/add-numeration/add-numeration.component";
import {UpdateNumerationComponent} from "./components/numeration/update-numeration/update-numeration.component";
import {PlanificatientsComponent} from "./components/planification/planificatients/planificatients.component";
import {UtilisateurComponent} from "./components/utilisateur/utilisateurs/utilisateurs.component";
import {UtilisateurDetailsComponent} from "./components/utilisateur/utilisateur-details/utilisateur-details.component";
import {AddUtilisateurComponent} from "./components/utilisateur/add-utilisateur/add-utilisateur.component";
import {UpdateUtilisateurComponent} from "./components/utilisateur/update-utilisateur/update-utilisateur.component";
import {UpdateReactifComponent} from "./components/reactif/update-reactif/update-reactif.component";
import {ReactifDetailComponent} from "./components/reactif/reactif-detail/reactif-detail.component";
import {ReactifsComponent} from "./components/reactif/reactifs/reactifs.component";
import {CommonModule} from "@angular/common";
import {NumerationsComponent} from "./components/numeration/numerations/numerations.component";
import {AddReactifComponent} from "./components/reactif/add-reactif/add-reactif.component";
import {LoginComponent} from "./components/login/login.component";
const routes: Routes = [{ path: 'analyses', component: AnalysesComponent },
  { path: 'analyseDetail/:id', component: AnalyseDetailComponent },
  { path: 'addAnalyse', component: AddAnalysesComponent },
  { path: 'updateAnalyse/:id', component: UpdateAnalysesComponent },
  { path: 'echantillons', component: EchantillonsComponent },
  { path: 'addEchantillon', component: AddEchantillonComponent },
  { path: 'updateEchantillon/:id', component: UpdateEchantillonComponent },
  { path: 'echantillonsDetail/:id', component: EchantillonDetailComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'patientDetail', component: PatientDetailsComponent },
  { path: 'addPatient', component: AddPatientComponent },
  { path: 'updatePatient/:id', component: UpdatePatientComponent },
  { path: 'fournisseurs', component: FournisseursComponent },
  { path: 'fournisseurDetail', component: FournisseurDetailComponent },
  { path: 'addFournisseur', component: AddFournisseurComponent },
  { path: 'materials', component: MaterialsComponent },
  { path: 'materialDetail', component: MaterialDetailComponent },
  { path: 'addMaterial', component: AddMaterialComponent },
  { path: 'updateMaterial/:id', component: UpdateMaterialComponent },
  { path: 'normes', component: NormesComponent },
  { path: 'normeDetail', component: NormeDetailsComponent },
  { path: 'addNorme', component: AddNormeComponent },
  { path: 'numerations', component: NumerationsComponent },
  { path: 'numerationDetail', component: NumerationDetailsComponent },
  { path: 'addNumeration', component: AddNumerationComponent },
  { path: 'updateNumeration', component: UpdateNumerationComponent },
  { path: 'planifications', component: PlanificatientsComponent },
  { path: 'utilisateurs', component: UtilisateurComponent },
  { path: 'utilisateurDetail', component: UtilisateurDetailsComponent },
  { path: 'addUtilisateur', component: AddUtilisateurComponent },
  { path: 'updateUser/:id', component: UpdateUtilisateurComponent },
  { path: 'updateReactif/:id', component: UpdateReactifComponent },
  { path: 'reactifDetail', component: ReactifDetailComponent },
  { path: 'reactifs', component: ReactifsComponent },
  { path: 'addReactif', component: AddReactifComponent },
  { path: 'login', component: LoginComponent }];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
