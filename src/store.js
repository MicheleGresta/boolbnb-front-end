import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  pageLoading: false,
  apartments: [],
  indirizzoFilter:'',
  apartmentFilter: {
    rooms_num:"",
    beds_num:"",
    bathroom_num:"",
  },
})

export function onPageLoad(){
  store.pageLoading = true;

  setTimeout(() => {
    store.pageLoading = false;
  }, 3500);
};

export function saveSelectedApartmentSlug(slug){
  // I save in store the slug passed in the Card component
  store.selectedApartmentSlug = slug;
}

export function filterApartment(){
  if(store.indirizzoFilter === "")
  axios.get("http://127.0.0.1:8000/api/apartments/", {params:store.apartmentFilter})
  .then((response) => {
      store.apartments = response.data.apartments 
      console.log(store.apartments);
    })
    if(store.indirizzoFilter !== ""){
      store.apartments = store.apartments
      store.indirizzoFilter = ""
    }
  }

export function searchApartment(){
  if (store.indirizzoFilter == ''){
    alert('Inserire un indirizzo')
  }
  else{
    axios.post("http://127.0.0.1:8000/api/searchApartament/",{params:store.indirizzoFilter})
    .then((response) =>{
        const appartamento = response.data
        console.log(appartamento['data'])
        store.apartments = appartamento
    })
  }
}