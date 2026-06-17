import os

themes = [
    ("Cyber Neon", "#FF1B6B", "#45CAFF"),
    ("Electric Indigo", "#0061FF", "#60EFFF"),
    ("Sunset Horizon", "#FF0F7B", "#F89B29"),
    ("Lavender Aura", "#696EFF", "#F8ACFF"),
    ("Ocean Breeze", "#00C6FF", "#0072FF"),
    ("Cotton Candy", "#FFAFBD", "#ffc3a0"),
    ("Deep Purple", "#7F00FF", "#E100FF"),
    ("Minty Fresh", "#00FF87", "#60EFFF"),
    ("Royal Velvet", "#130CB7", "#52E5E7"),
    ("Peach Blush", "#FF9A9E", "#FECFEF"),
    ("Dark Master", "#ee0979", "#ff6a00")
]

def hex_to_rgb(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

css_dir = "public/css/skin"
os.makedirs(css_dir, exist_ok=True)

style_switcher_css = ""

for i, (name, c1, c2) in enumerate(themes):
    rgb1 = hex_to_rgb(c1)
    rgb2 = hex_to_rgb(c2)
    
    css_content = f""":root {{
    --skin-color: {c2};
    --theme-gradient: linear-gradient(135deg, {c1} 0%, {c2} 100%);
    --theme-gradient-glow: rgba({rgb2[0]}, {rgb2[1]}, {rgb2[2]}, 0.3);
    
    --ambient-bg-light: radial-gradient(circle at top right, rgba({rgb1[0]}, {rgb1[1]}, {rgb1[2]}, 0.08) 0%, transparent 60%),
                        radial-gradient(circle at bottom left, rgba({rgb2[0]}, {rgb2[1]}, {rgb2[2]}, 0.08) 0%, transparent 60%);
                        
    --ambient-bg-dark: radial-gradient(circle at top right, rgba({rgb1[0]}, {rgb1[1]}, {rgb1[2]}, 0.15) 0%, transparent 60%),
                       radial-gradient(circle at bottom left, rgba({rgb2[0]}, {rgb2[1]}, {rgb2[2]}, 0.15) 0%, transparent 60%);
}}
"""
    with open(f"{css_dir}/color-{i+1}.css", "w") as f:
        f.write(css_content)
        
    style_switcher_css += f"""
.style-switcher .color-{i+1} {{
    background: linear-gradient(135deg, {c1} 0%, {c2} 100%);
}}"""

print(style_switcher_css)
