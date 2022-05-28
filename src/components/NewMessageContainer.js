import React from "react";
import NewMessage from "./NewMessage";
import { v4 } from "uuid";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
const NewMessageContainer = ({ messages }) => {
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "0.5rem",
					justifyContent: "flex-end",
					width: "100%",
					height: "100%",
					paddingRight: "1.8rem",
				}}
			>
				{messages?.map((item) => {
					return (
						<div
							key={v4()}
							style={{
								display: "flex",
								width: "100%",
								justifyContent: "flex-end",

								gap: "1rem",
								alignItems: "flex-end",
							}}
						>
							<NewMessage message={item} />
							<div className="icon">
								<CheckCircleOutlineOutlinedIcon
									sx={{ width: "1rem", height: "1rem", color: "gray" }}
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default NewMessageContainer;
