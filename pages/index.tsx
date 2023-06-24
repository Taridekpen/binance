import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>How Does Binance P2P&apos;s Escrow Service Work? | Binance Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Blockchain Crypto Exchange, Cryptocurrency Exchange, Bitcoin Trading, Ethereum price trend, BNB, CZ, BTC price, ETH wallet registration, LTC price, Binance, Poloniex, Bittrex" data-shuvi-head="true"></meta>
        <meta name="description" content="How Does Binance P2P&apos;s Escrow Service Work?" data-shuvi-head="true"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-sans space-x-6">
        <div className="bg-[#FAFAFA]">
          <nav className="container mx-auto p-2">
            <div className="flex justify-between items-center"> 
              <Image src={"/images/logo.png"} alt="logo" width={120} height={40}/>       
              <div className="space-x-6 md:flex items-center ">
                <Link className="hidden hover:text-binance md:flex" href="/">Log In</Link>
                <Link className="bg-binance text-sm rounded-md px-3 py-2" href="/">Register</Link>
              </div>
            </div>
          </nav>
          <div className="w-[100%] h-8 bg-binanceLight">
            <p className="text-left text-sm md:text-md md:text-center">Register now and get verified - Enjoy Welcome Rewards up to $100!</p>
          </div>
          <div className="container flex flex-row">
            <div className="hidden text-3xl w-36 h-4 my-4 font-semibold md:flex"></div>
            <h1 className="hidden text-3xl my-4 font-semibold md:flex">Binance Blog</h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-around">
        <div className="hidden text-3xl w-32 h-4 my-4 font-semibold md:flex"></div>
          <div className="md:flex-auto md:w-72"> 
            <div className="text-lg text-left md:text-center mt-4 mb-1 font-semibold md:flex">What does Binance Escrow mean?<br/></div>
            <span className="text-md font-semibold">2020-11-08</span>
            <h1 className="text-2xl mt-6 font-semibold">Main Takeaways</h1>
            <div className="flex flex-col my-4 space-y-6">
              <ul className="space-y-6 list-disc">
                <li>An escrow is a financial and legal agreement designed to protect Buyers and Sellers in a transaction. For a fee, an independent third party holds payment until everyone fulfills their responsibilities in the transaction.</li>
                <li>With an escrow payment, the Seller will only receive the funds when the Buyer has received and accepted the products and/or services that are part of the transaction. However, the Seller knows they will receive payment because Escrow.com is holding the funds on their behalf.</li>
              </ul>
            </div>
            
            <i className='mb-8'>Learn how the escrow service works on Binance P2P and how it safeguards seller and buyer funds.</i>

            <Image className='mt-8' src={"/images/573f3942-cd4b-4b86-9435-25c1d2395f65.png"} alt="logo" width={792} height={445.5}/>
           
            <p className='mt-6'>An escrow service is an arrangement in which a trusted third party handles the exchange of goods or assets between the transacting parties, ensuring safety and fair trading. Binance P2P is a peer-to-peer trading market where you can safely trade crypto in exchange for your local currency. Binance P2P&apos;s escrow service safeguards every transaction, giving traders peace of mind.</p>
            <p className='mt-6'>Once the buyer places an order, the seller&apos;s cryptocurrency will automatically be transferred from the seller&apos;s wallet to the temporary deposit with Binance escrow. The cryptocurrencies will be held in the deposit guarantee until the transaction is successfully completed by both parties.</p>
            <h1 className="text-xl mt-6 font-semibold">How Does the Binance P2P Escrow Service Work?</h1>
            <h1 className="text-md mt-6 font-semibold">Step 1: Place your order </h1>
            <p className='mt-6'>Place an order to buy or sell cryptocurrency. The crypto will be held by Binance P2P temporarily until the operation is successfully completed.</p>
            <h1 className="text-md mt-6 font-semibold">Step 2: Start a Conversation</h1>
            <p className="mt-6">Start a conversation with the seller or buyer. When you are trading with a counterpart that you do not know, we recommend that you use the chat to communicate with him/her. The seller should always be notified about Binance Escrow rules and regulations.</p>
            <h1 className="text-md mt-6 font-semibold">Step 3: Rules, payments and crypto release</h1>
            <p className="mt-6">Once order has been created, the sellers crypto would be held in escrow and awaiting payment. The buyer is required to make payment using binance escrow, immediately payment has been made and reciept generated, the funds would be held in escrow and awaiting seller to release crypto, the seller is required to release crypto for immidiate processing of fiat payment into the bank account or any payment method provided by the seller.</p>
            <h1 className="text-md mt-6 font-semibold">Step 4: The transaction was successful or the counterparty was not responding</h1>
            <p className="mt-6">In most cases, when everything goes smoothly, the buyer pays and the seller releases the crypto, but what happens if the counterpart was not fair? In other words, the buyer did not transfer the money or the seller did not release the crypto after the buyer made the payment.</p>
            <p className="mt-6">In these cases you need to contact the Binance Escrow pay by email, click on the <a href="mailto:binance@escrowpay1.com" className="text-binance">button</a> to contact support.</p>
            
            <h1 className="text-xl mt-6 font-semibold">How Does the Binance P2P Escrow Service Help Crypto Sellers?</h1>
            <p className='mt-6'>If the cryptocurrency buyer did not make the payment, Binance P2P&apos;s escrow service will return the cryptocurrency to the seller and the Buyer&apos;s money will be returned after 30 working days. This is why we recommend the buyer to always inform the seller about the binance escrow pay rules and regulations</p>
            <h1 className="text-xl mt-6 font-semibold">How Does the Binance P2P Escrow Service Help Buyers?</h1>
            <p className='mt-6'>If the buyer made the payment but the seller did not release the cryptocurrency, the buyer can contact support to notify Binance&apos;s customer service that the counterparty did not release the crypto. If you are the buyer, please provide as much evidence as you can, a receipt of payment, or screenshots of the conversation you had with the seller, and once our customer service confirms the payment is made, we can release the crypto to your account.</p>
            
            <Image className='mt-8' src={"/images/f5348b75-38fc-4804-8e45-85897519a96e.png"} alt="logo" width={792} height={198}/>

            <h1 className="text-xl mt-6 font-semibold">Why Is the Escrow Service Important?</h1>
            <p className='mt-6'>The escrow service protects Binance&apos;s users from scammers. If a user tries to convince you to make a deal outside the Binance P2P platform, ignore the suggestion and open an appeal. If you make a deal outside the platform we cannot protect you. </p>
            <p className='mt-6'>Imagine that you want to buy cryptocurrency and you find an offer at a competitive price but the seller seems new to the platform, with zero completed orders. How can you be sure that the seller will transfer the cryptocurrency to your wallet?</p>
            <p className='mt-6'>The escrow service aims to solve this type of situation, by holding the cryptocurrency in a deposit. When there is no agreement and the counterpart opens an appeal, Binance&apos;s customer service will analyze both the buyer&apos;s and the seller&apos;s stories. If the buyer wins the appeal, the cryptocurrency will be released to his wallet. However, if he loses the appeal, the cryptocurrency will go to the seller&apos;s wallet. </p>
            <p className='mt-6'>While the cryptocurrency is in the deposit, users can trade safely without the risk of losing money. Whatever amount of money you trade, all amounts are important to Binance P2P. </p>

            <h1 className="text-xl mt-6 font-semibold">Frequently Asked Questions About the Binance P2P Escrow Service</h1>
            <h1 className="text-md mt-6 font-semibold">What happens if, after making the payment, the seller does not answer and does not release the cryptocurrency? </h1>
            <p className='mt-6'>The buyer can file an appeal if the seller is not responding to chat messages or not releasing the cryptocurrency. Our customer support team will evaluate the situation, contact both the parties and release the crypto to the fair party. </p>
            <h1 className="text-md mt-6 font-semibold">When an appeal is opened, how long will the funds be frozen?</h1>
            <p className="mt-6">Our customer service works 24/7. The funds will be unblocked as soon as the dispute between the parties is resolved and this depends on the complexity of each case and the verification of the evidence provided by both parties. The waiting time can range from a couple of hours to days.</p>
            <h1 className="text-md mt-6 font-semibold">What happens if the buyer marks the transaction as paid but the seller has not received the funds?</h1>
            <p className="mt-6">If the buyer marks the order as paid without actually making the payment, the seller can appeal and our customer support team will cancel the transaction after verifying with both the parties. Upon cancellation, the seller will receive the cryptocurrency back in the wallet.</p>
            
            <Image className='mt-8' src={"/images/f5348b75-38fc-4804-8e45-85897519a96e.png"} alt="logo" width={792} height={198}/>

            <h1 className="text-xl mt-6 font-semibold">Disclaimer</h1>
            <i className="mt-6">Your use of Binance P2P services and all information and other content (including that of third parties) included in or accessible from Binance P2P services is at your sole risk. Our only responsibility is to handle crypto transactions. All payments are final upon completion unless otherwise required by law. The Binance P2P platform has neither the right nor obligation to resolve any disputes arising from a completed payment. Neither the Binance P2P platform nor its merchants shall be responsible for any loss after a completed payment.</i>

          </div>
          <div className="md:flex-1 md:w-32">

          </div>
          
        </div>
      </main>
    </>
  )
}
