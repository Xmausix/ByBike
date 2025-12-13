1. Frontend → POST /api/rentals
2. Backend:
    - liczy cenę
    - robi soft-hold
    - tworzy PaymentIntent
3. Frontend:
    - Stripe Checkout / Elements
    - karta / Apple Pay / Google Pay / BLIK
4. Stripe → webhook success
5. Backend:
    - potwierdza rezerwację
    - wysyła mail
6. DONE 🚲

POST /api/rentals
→ pending_payment
→ Stripe PaymentIntent
→ frontend płaci (karta / Apple Pay / Google Pay / BLIK)
→ webhook success
→ status: confirmed
→ mail + link do Self Guided Tours
