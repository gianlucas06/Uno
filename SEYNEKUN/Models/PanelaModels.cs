using System.ComponentModel.DataAnnotations;
using System;
using System.Security.Cryptography;
using Entity;

namespace SEYNEKUN.Models
{
    public class PanelaInputModel
    {
        [Required( ErrorMessage = "La Codigo Registro es requerida")]
        public string Idregistro { get; set; }
        [Required(ErrorMessage = "El fecha es requerida")]
        public DateTime FechaIngreso{ get; set;}
        [Required(ErrorMessage = "El Numero Lote es requerida")]
        public string NumeroLote{get; set;}
        [Required( ErrorMessage = "El Numero Lote Agricola es requerida")]
        public string NumeroLoteAgricola{get; set;}
        [Required(ErrorMessage = "El Etapas es requerida")]
        public string Etapas{get; set;}
        [Required( ErrorMessage = "El Cantidad es requerida")]
        public string Cantidad{get; set;}
        [Required(ErrorMessage = "El nombre es requerida")]
        public string Responsable{get; set;}
        
         
         }
       public class PanelaViewModel : PanelaInputModel
     {
        public PanelaViewModel()
        {

        }
        public PanelaViewModel(Panela panela)
        {
            Idregistro = panela.Idregistro;
            FechaIngreso = panela.FechaIngreso;
            NumeroLote = panela.NumeroLote;
            NumeroLoteAgricola = panela.NumeroLoteAgricola;
            Etapas = panela.Etapas;
            Cantidad = panela.Cantidad;
            Responsable = panela.Responsable;
            
        }
            
    }
}