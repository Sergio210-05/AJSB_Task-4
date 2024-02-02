import SitePage from './page/page';
import ValidatorForm from './validator_form/validator-form';

document.addEventListener("DOMContentLoaded", () => {
  const PageContainer = new SitePage();
  // const page = document.querySelector('.game-container');

  const Validator = new ValidatorForm(PageContainer);
  
});
