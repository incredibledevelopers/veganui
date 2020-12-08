export class VEGAN_SETUP{
    public static categories = [
      { 
        category : 'RV',  
        displayName : 'Regular', 
        imagesFolder : '/assets/vegetables/regular/',
        active : true, 
        noItems : false,
        items:[]
      },
      {
        category : 'LV',
        displayName : 'Leafy', 
        imagesFolder : '/assets/vegetables/leafy/',
        active : false, 
        noItems : false,
        items:[]
      },
      {
        category : 'CV',
        displayName : 'Cut Vegetables', 
        imagesFolder : '/assets/vegetables/cut/',
        active : false, 
        noItems : false,
        items :[]
      },
      {
        category : 'EX',
        displayName : 'Exotic',
        imagesFolder : '/assets/exotic/',
        active : false, 
        noItems : false,
        items:[]
      },
      {
        category : 'DL',
        displayName : 'Dal', 
        imagesFolder : '/assets/dals/', 
        active : false,
        noItems : false,
        items :[]
      },
      {
        category : 'FR',
        displayName : 'Fruits',
        imagesFolder : '/assets/fruits/',
        active : false,
        noItems : false,
        items :[]
      }
    ]

    public static units_gms = [0,250,500,750,1000,1250,1500,2000];
    public static units_pcs = [0,1,2,3,4,5];

    public static deliveryCentreAddress = "Shop. No. 2, Near Kothrud Depot, Pune - 411038";

    public static devlieryTimeMessages = ["Approx Delivery Time : Next day*" 
    + " (may vary depending on the traffic/weather conditions).",
      "Need Express Delivery? Please contact us on the given helpline numbers. "]; 
    
    public static deliveryCharges = [
      { distance : 'Within 2 kms', charges : 0},
      { distance : 'After 4 kms', charges : 40}
    ]

    public static contactMessage = "For any queries/suggestions/feedback, Please contact "
    public static contactNumbers = "9604377389/8668979413";

    public static offers = [
      "Get Flat 20% Off on the orders above ₹500.",
      "Independence Day Special! Get 10% on all items."
    ]
  };