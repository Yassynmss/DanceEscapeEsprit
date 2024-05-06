import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/Services/event.service';
import { TicketsService } from 'src/app/services/tickets.service';



@Component({
  selector: 'app-ticketbook',
  templateUrl: './ticketbook.component.html',
  styleUrls: ['./ticketbook.component.css']
})
export class TicketbookComponent implements OnInit {
  quantity!: number;
  ticketType!: string;
  price!: number;
  ev_id!: any;
  event!:any;
  finalPrice!:any

  constructor(private ticketService: TicketsService, private route: ActivatedRoute ,private router:Router
  ) { }

  ngOnInit() {
    this.loadStripe();
    this.ev_id = this.route.snapshot.paramMap.get('id_event');
    console.log(this.ev_id);
    this.ticketService.getTicketById(this.ev_id).subscribe(rsp =>{
      this.event=rsp;
      console.warn(this.event);
    })
  }


  calculatePrice() {
    var type=0;
    console.log('Quantity:', this.quantity);
    console.log('Ticket Type:', this.ticketType);
    if(this.ticketType=="VIP"){
      type=50;
    }else{
      type=0
    }
    this.price = this.event?.price * this.quantity + type;
  }
  /***************************************************STRIPE*************************************************************/
// Define handler variable at the class level
handler: any;

// Function to initiate the payment process
pay(amount: any) {
  if (!this.handler) {
    console.error("Stripe handler is not initialized.");
    return;
  }

  this.handler.open({
    name: 'Demo Site',
    description: '2 widgets',
    amount: amount,
    currency: 'tnd', // Specify Tunisian Dinar as the currency
    token: (token: any) => {
      console.log("Payment token:", token);
      alert("Payment Success !!");
      // Additional payment success logic
    },
    closed: () => {
      console.log("Payment pop-up closed.");
      // Additional closed pop-up logic
    }
  });
}

// Function to load Stripe.js dynamically
loadStripe() {
  // Check if the Stripe.js script has already been loaded
  if (!window.document.getElementById('stripe-script')) {
    // If not loaded, create a new <script> element
    var s = window.document.createElement("script");
    s.id = "stripe-script"; // Set the id of the script element
    s.type = "text/javascript"; // Set the type of the script element
    // Set the source URL to load the Stripe.js library from the Stripe CDN
    s.src = "https://checkout.stripe.com/checkout.js";
    // Assign an onload callback function
    s.onload = () => {
      // Stripe.js library has been loaded, configure StripeCheckout
      this.handler = (<any>window).StripeCheckout.configure({
        // Set your publishable API key
        key: 'pk_test_51M3mJJJXlzFPH9CjGuzsZ3FxtHBXxcw2aB1bL97HeAGZ7yIRGnlOu2JWGTpmh36OvX5jdSTlXgSid9BvsLDDvsf900kCSCQoza',
        // Set the locale to 'auto' (let Stripe determine the locale)
        locale: 'auto',
        // Callback function executed when payment is successful
        token: (token: any) => {
          // Display a success message using Swal (SweetAlert)
          alert("Payment Success !!")
          // Navigate to the desired page
          this.router.navigate(['']);
        }
      });
    };
    // Append the <script> element to the <body> of the document
    window.document.body.appendChild(s);
  } else {
    // Stripe.js script has already been loaded, configure StripeCheckout
    this.handler = (<any>window).StripeCheckout.configure({
      // Set your publishable API key
      key: 'pk_test_51M3mJJJXlzFPH9CjGuzsZ3FxtHBXxcw2aB1bL97HeAGZ7yIRGnlOu2JWGTpmh36OvX5jdSTlXgSid9BvsLDDvsf900kCSCQoza',
      // Set the locale to 'auto' (let Stripe determine the locale)
      locale: 'auto',
      // Callback function executed when payment is successful
      token: (token: any) => {
        // Display a success message using Swal (SweetAlert)
        alert("Payment Success !!")
        // Navigate to the program page
        //this.router.navigate(['/frontOffice/programs/program']);
      }
    });
  }
}

}
