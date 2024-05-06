<template>
  <div class="card">
    <form>

      <div class="col-md-6 mb-3">
        <CodigoCadastro label="Código Cliente:" placeholder="Enter código cliente"></CodigoCadastro>
        <CodigoCadastro label="Código Fornecedor:" placeholder="Enter código fornecedor"></CodigoCadastro>

        <RazaoSocial></RazaoSocial>
        <InscricaoEstadual></InscricaoEstadual>

        <TipoEmpresa></TipoEmpresa>
        <ContaGerencial></ContaGerencial>
        <CustomSelect label="Conta Gerencial:" :options="['exemplo 1', 'exemplo 2', 3, 4]"></CustomSelect>

        <DescricaoInput label="Descrição Conta Gerencial:" placeholder="Enter descrição conta gerencial"></DescricaoInput>


        <GrupoConta></GrupoConta>
        <SituacaoCadastral></SituacaoCadastral>
        <UnidadeNegocio></UnidadeNegocio>

        <CentroCusto label="Centro de Custo:" placeholder="Enter centro de custo"></CentroCusto>
        <CentroCusto label="Sub Centro de Custo:" placeholder="Enter sub centro de custo"></CentroCusto>
        <CentroCusto label="Sub Sub Centro de Custo:" placeholder="Enter sub sub centro de custo"></CentroCusto>

        <DescricaoInput label="Descrição Centro de Custo:" placeholder="Enter descrição centro de custo"></DescricaoInput>
        <DescricaoInput label="Descrição Sub Sub Centro de Custo:" placeholder="Enter descrição sub sub centro de custo"></DescricaoInput>

        <CustomSelect label="Nível de Alçada de Aprovação:" :options="[1, 2, 3, 4]"></CustomSelect>
        <CustomSelect label="Condição de Pagamento:" :options="['À vista', '30 dias', '60 dias', '90 dias']"></CustomSelect>


      </div>
      <fieldset class="mb-3">
        <legend>Personal Information</legend>
        <div class="row">
          <div class="col-md-6 mb-3">
            <TextInput label="First Name" v-model="firstName"></TextInput>
          </div>
          <div class="col-md-6 mb-3">
            <TextInput label="Last Name" v-model="lastName"></TextInput>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <TextInput label="Email" v-model="email"></TextInput>
          </div>
          <div class="col-md-6 mb-3">
            <CnpjInput label="CNPJ" v-model="cnpj"></CnpjInput>
          </div>
        </div>
      </fieldset>
      <fieldset class="mb-3">
        <legend>Address Information</legend>
        <div class="row">
          <div class="col-md-6 mb-3">
            <AddressField label="Address" v-model="address"></AddressField>
          </div>
          <div class="col-md-6 mb-3">
            <NumberField label="Number" v-model="number"></NumberField>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <ComplementField label="Complement" v-model="complement"></ComplementField>
          </div>
          <div class="col-md-6 mb-3">
            <CepField label="CEP" v-model="cep"></CepField>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <NeighborhoodField label="Neighborhood" v-model="neighborhood"></NeighborhoodField>
          </div>
          <div class="col-md-6 mb-3">
            <CityField label="City" v-model="city"></CityField>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <StateField label="State" v-model="state"></StateField>
          </div>
        </div>
      </fieldset>
      <fieldset class="mb-3">
        <legend>Contact</legend>
        <div class="row">
          <div class="col-md-6 mb-3">
            <ContatoComercialInput label="Contato Comercial" v-model="contatoComercial"></ContatoComercialInput>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <TelefoneInput label="Telefone" v-model="telefone"></TelefoneInput>
          </div>
          <div class="col-md-6 mb-3">
            <ContatoFinanceiroInput label="Contato Financeiro" v-model="contatoFinanceiro"></ContatoFinanceiroInput>
          </div>
          <div class="col-md-6 mb-3">
            <EmailComercialInput label="E-mail Comercial" v-model="emailComercial"></EmailComercialInput>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <EmailFinanceiroInput label="E-mail Financeiro" v-model="emailFinanceiro"></EmailFinanceiroInput>
          </div>
          <div class="col-md-6 mb-3">
            <MeioRecebimentoInput label="Meio de Recebimento" v-model="meioRecebimento"></MeioRecebimentoInput>
          </div>
        </div>
      </fieldset>
      <fieldset class="mb-3">
        <legend>Financial info</legend>
        <div class="row">
          <div class="col-md-6 mb-3">
            <BancoInput label="Banco" v-model="banco"></BancoInput>
          </div>
          <div class="col-md-6 mb-3">
            <AgenciaInput label="Agência" v-model="agencia"></AgenciaInput>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <ContaInput label="Conta" v-model="conta"></ContaInput>
          </div>
          <div class="col-md-6 mb-3">
            <PixInput label="PIX" v-model="pix"></PixInput>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <CondicaoRecebimentoInput label="Condição de Recebimento" v-model="condicaoRecebimento"></CondicaoRecebimentoInput>
          </div>
          <div class="col-md-6 mb-3">
            <JurosInput label="Juros" v-model="juros"></JurosInput>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <MultaInput label="Multa" v-model="multa"></MultaInput>
          </div>
        </div>
      </fieldset>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import TextInput from './components/TextInput.vue';
import CnpjInput from './components/CnpjInput.vue';
import AddressField from './components/AddressField.vue';
import NumberField from './components/NumberField.vue';
import ComplementField from './components/ComplementField.vue';
import CepField from './components/CepField.vue';
import NeighborhoodField from './components/NeighborhoodField.vue';
import CityField from './components/CityField.vue';
import StateField from './components/StateField.vue';
import TelefoneInput from './components/TelefoneInput';
import ContatoComercialInput from './components/ContatoComercialInput.vue';
import ContatoFinanceiroInput from './components/ContatoFinanceiroInput.vue';
import EmailComercialInput from './components/EmailComercialInput.vue';
import EmailFinanceiroInput from './components/EmailFinanceiroInput.vue';
import MeioRecebimentoInput from './components/MeioRecebimentoInput.vue';
import BancoInput from './components/BancoInput.vue';
import AgenciaInput from './components/AgenciaInput.vue';
import ContaInput from './components/ContaInput.vue';
import PixInput from './components/PixInput.vue';
import CondicaoRecebimentoInput from './components/CondicaoRecebimentoInput.vue';
import JurosInput from './components/JurosInput.vue';
import MultaInput from './components/MultaInput.vue';
import CodigoCadastro from './components/CodigoCadastro.vue';
import RazaoSocial from './components/RazaoSocial.vue'
import InscricaoEstadual from './components/InscricaoEstadual.vue'
import TipoEmpresa from './components/TipoEmpresa.vue'
import ContaGerencial from './components/ContaGerencial.vue'
import GrupoConta from './components/GrupoConta.vue'
import SituacaoCadastral from './components/SituacaoCadastral.vue'
import UnidadeNegocio from './components/UnidadeNegocio.vue'
import CentroCusto from './components/CentroCusto.vue';
import DescricaoInput from './components/DescricaoInput.vue';
import CustomSelect from './components/CustomSelect.vue';



export default {
  components: {
    TextInput,
    CnpjInput,
    AddressField,
    NumberField,
    ComplementField,
    CepField,
    NeighborhoodField,
    CityField,
    StateField,
    TelefoneInput,
    ContatoComercialInput,
    ContatoFinanceiroInput,
    EmailComercialInput,
    EmailFinanceiroInput,
    MeioRecebimentoInput,
    BancoInput,
    AgenciaInput,
    ContaInput,
    PixInput,
    CondicaoRecebimentoInput,
    JurosInput,
    MultaInput,
    CodigoCadastro,
    RazaoSocial,
    InscricaoEstadual,
    TipoEmpresa,
    ContaGerencial,
    GrupoConta,
    SituacaoCadastral,
    UnidadeNegocio,
    CentroCusto,
    DescricaoInput,
    CustomSelect,
    
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      cnpj: '',
      address: '',
      number: '',
      complement: '',
      cep: '',
      neighborhood: '',
      city: '',
      state: '',
      telefone: '',
      contatoComercial: '',
      contatoFinanceiro: '',
      emailComercial: '',
      emailFinanceiro: '',
      meioRecebimento: '',
      banco: '',
      agencia: '',
      conta: '',
      pix: '',
      condicaoRecebimento: '',
      juros: '',
      multa: ''
    };
  }
};
</script>

<style>
/* Add your app styling here */
</style>./components/SelectInput.vue./components/SelectedOption.vue
