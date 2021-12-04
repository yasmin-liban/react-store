export default function BaseTemplate({ header,body, sidebar,footer }: any) {

	return (
		<div className="min-w-full min-h-full main-bg">
			<header className="main-header">{header}</header>
			
			<section className="flex flex-col overflow-hidden md:flex-row main-content">
				<section className="order-1 md:order-2 main-sidebar">{sidebar}</section>
				<section className="order-2 h-full md:order-1 md:container md:mx-auto main-body">{body}</section>
			</section>
			
			<footer className="main-footer">{footer}</footer>
		</div>
	);
}