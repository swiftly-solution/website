'use client';

import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  Settings2, 
  Trash2, 
  ArrowUp, 
  ArrowDown, 
  Palette, 
  MousePointerClick, 
  ToggleLeft, 
  SlidersHorizontal, 
  ListOrdered, 
  Keyboard, 
  Type, 
  FolderTree,
  ChevronRight,
  Code2,
  Copy,
  Check,
  PanelRightClose,
  LayoutDashboard,
  Home
} from 'lucide-react';

type MenuOptionType =
  | 'Button'
  | 'Toggle'
  | 'Slider'
  | 'Choice'
  | 'Input'
  | 'Text'
  | 'Submenu';

type OpenMode = 'SinglePlayer' | 'AllPlayers';

type ScrollStyleValue = 'CenterFixed' | 'LinearScroll' | 'WaitingCenter';

type KeyBindValue =
  | 'Default'
  | 'E'
  | 'Mouse1'
  | 'W'
  | 'S'
  | 'Esc'
  | 'Q'
  | 'R'
  | 'Tab';

interface MenuOptionNode {
  id: string;
  type: MenuOptionType;
  label: string;
  todoTag: string;
  defaultToggleState: boolean;
  sliderMin: number;
  sliderMax: number;
  sliderStep: number;
  sliderDefault: number;
  sliderBars: number;
  choicesCsv: string;
  defaultChoice: string;
  inputMaxLength: number;
  inputHint: string;
  inputDefaultValue: string;
  submenuGenerateFlow: boolean;
  submenuTitle: string;
  submenuOptions: MenuOptionNode[];
}

const OPTION_TYPES: MenuOptionType[] = ['Button', 'Toggle', 'Slider', 'Choice', 'Input', 'Text', 'Submenu'];
const KEYBIND_VALUES: KeyBindValue[] = ['Default', 'E', 'Mouse1', 'W', 'S', 'Esc', 'Q', 'R', 'Tab'];

const OPTION_COLORS: Record<MenuOptionType, string> = {
  Button: 'border-sky-400/50 bg-sky-500/10 text-sky-200',
  Toggle: 'border-emerald-400/50 bg-emerald-500/10 text-emerald-200',
  Slider: 'border-amber-400/50 bg-amber-500/10 text-amber-200',
  Choice: 'border-fuchsia-400/50 bg-fuchsia-500/10 text-fuchsia-200',
  Input: 'border-cyan-400/50 bg-cyan-500/10 text-cyan-200',
  Text: 'border-violet-400/50 bg-violet-500/10 text-violet-200',
  Submenu: 'border-rose-400/50 bg-rose-500/10 text-rose-200',
};

const OPTION_ICONS: Record<MenuOptionType, React.ElementType> = {
  Button: MousePointerClick,
  Toggle: ToggleLeft,
  Slider: SlidersHorizontal,
  Choice: ListOrdered,
  Input: Keyboard,
  Text: Type,
  Submenu: FolderTree,
};

interface TogglePillProps {
  label: string;
  active: boolean;
  onToggle: (next: boolean) => void;
  description?: string;
}

function TogglePill({ label, active, onToggle, description }: TogglePillProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={active}
      onClick={() => onToggle(!active)}
      className={`w-full rounded-md border px-3 py-2 text-left transition ${
        active
          ? 'border-sky-400 bg-sky-500/10 text-sky-100 shadow-[0_0_0_1px_rgba(56,189,248,0.35)]'
          : 'border-fd-border bg-fd-background text-fd-foreground hover:border-fd-primary/50'
      }`}
    >
      <div className="flex items-center justify-between gap-2 text-sm font-medium">
        <span>{label}</span>
        <span
          className={`inline-flex min-w-[2.2rem] items-center justify-center rounded border px-2 py-0.5 text-[10px] uppercase tracking-wide ${
            active ? 'border-sky-300/60 bg-sky-400/20 text-sky-100' : 'border-fd-border text-fd-muted-foreground'
          }`}
        >
          {active ? 'On' : 'Off'}
        </span>
      </div>
      {description ? <p className="mt-1.5 text-xs text-fd-muted-foreground/80">{description}</p> : null}
    </button>
  );
}

function ColorPropertyInput({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="group flex flex-col gap-1.5 text-sm">
      <span className="font-medium">{label}</span>
      <div className="relative flex items-center overflow-hidden rounded-md border border-fd-border bg-fd-background shadow-sm transition-colors focus-within:border-sky-400/50 focus-within:ring-1 focus-within:ring-sky-400/20 hover:border-fd-primary/30">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border-r border-fd-border bg-fd-card">
          <input
            type="color"
            value={value || '#000000'}
            onChange={(e) => onChange(e.target.value.toUpperCase())}
            className="h-6 w-6 cursor-pointer appearance-none rounded-sm border-0 bg-transparent p-0 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:rounded-sm [&::-webkit-color-swatch]:border-fd-border"
          />
        </div>
        <input
          type="text"
          placeholder="#FFFFFF"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 w-full bg-transparent px-3 text-sm font-mono tracking-wider outline-none placeholder:text-fd-muted-foreground/50"
        />
      </div>
    </label>
  );
}

function createId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function sanitizeIdentifier(raw: string, fallback: string): string {
  const value = raw.trim();
  if (value.length === 0) {
    return fallback;
  }

  const normalized = value
    .replace(/[^A-Za-z0-9_]/g, '_')
    .replace(/^[^A-Za-z_]+/, '');

  return normalized.length > 0 ? normalized : fallback;
}

function escapeCSharpString(raw: string): string {
  return raw.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function floatLiteral(value: number): string {
  if (!Number.isFinite(value)) {
    return '0f';
  }

  return `${value}f`;
}

function clampInt(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) {
    return min;
  }

  return Math.min(max, Math.max(min, Math.round(value)));
}

function createDefaultOption(type: MenuOptionType, index: number): MenuOptionNode {
  const baseLabel = `${type} Option ${index}`;
  return {
    id: createId(),
    type,
    label: baseLabel,
    todoTag: `OPTION_${index}`,
    defaultToggleState: false,
    sliderMin: 0,
    sliderMax: 100,
    sliderStep: 5,
    sliderDefault: 50,
    sliderBars: 10,
    choicesCsv: 'Choice A, Choice B, Choice C',
    defaultChoice: 'Choice A',
    inputMaxLength: 16,
    inputHint: '__TODO_INPUT_HINT__',
    inputDefaultValue: '',
    submenuGenerateFlow: false,
    submenuTitle: `Submenu ${index}`,
    submenuOptions: [],
  };
}

function keybindLine(indent: string, methodName: string, keybind: KeyBindValue): string | null {
  if (keybind === 'Default') {
    return null;
  }

  return `${indent}.${methodName}(KeyBind.${keybind})`;
}

function getOptionsAtPath(nodes: MenuOptionNode[], path: string[]): MenuOptionNode[] {
  let current = nodes;
  for (const id of path) {
    const found = current.find((node) => node.id === id);
    if (!found) {
      return [];
    }

    current = found.submenuOptions;
  }

  return current;
}

function getPathNodes(nodes: MenuOptionNode[], path: string[]): MenuOptionNode[] {
  const resolved: MenuOptionNode[] = [];
  let current = nodes;

  for (const id of path) {
    const found = current.find((node) => node.id === id);
    if (!found) {
      break;
    }

    resolved.push(found);
    current = found.submenuOptions;
  }

  return resolved;
}

function updateOptionsAtPath(
  nodes: MenuOptionNode[],
  path: string[],
  updater: (current: MenuOptionNode[]) => MenuOptionNode[],
): MenuOptionNode[] {
  if (path.length === 0) {
    return updater(nodes);
  }

  const [head, ...rest] = path;

  return nodes.map((node) => {
    if (node.id !== head) {
      return node;
    }

    return {
      ...node,
      submenuOptions: updateOptionsAtPath(node.submenuOptions, rest, updater),
    };
  });
}

export function MenuVisualBuilder() {
  const [menuVariableName, setMenuVariableName] = useState('settingsMenu');
  const [menuTitle, setMenuTitle] = useState('Match Settings');
  const [defaultComment, setDefaultComment] = useState('Use W/S to move and E to select');
  const [maxVisibleItems, setMaxVisibleItems] = useState(5);
  const [enableSound, setEnableSound] = useState(true);
  const [freezePlayer, setFreezePlayer] = useState(false);
  const [showTitle, setShowTitle] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [showComment, setShowComment] = useState(true);
  const [showTitleCount, setShowTitleCount] = useState(true);
  const [autoAdjustVisibleItems, setAutoAdjustVisibleItems] = useState(true);
  const [globalScrollStyle, setGlobalScrollStyle] = useState<ScrollStyleValue>('WaitingCenter');
  const [navigationMarkerColor, setNavigationMarkerColor] = useState('');
  const [menuFooterColor, setMenuFooterColor] = useState('');
  const [visualGuideLineColor, setVisualGuideLineColor] = useState('');
  const [disabledOptionColor, setDisabledOptionColor] = useState('');
  const [autoCloseDelay, setAutoCloseDelay] = useState(0);

  const [selectKeybind, setSelectKeybind] = useState<KeyBindValue>('Default');
  const [moveForwardKeybind, setMoveForwardKeybind] = useState<KeyBindValue>('Default');
  const [moveBackwardKeybind, setMoveBackwardKeybind] = useState<KeyBindValue>('Default');
  const [exitKeybind, setExitKeybind] = useState<KeyBindValue>('Default');

  const [openMode, setOpenMode] = useState<OpenMode>('SinglePlayer');
  const [playerPlaceholder, setPlayerPlaceholder] = useState('__TODO_PLAYER__');

  const [rootOptions, setRootOptions] = useState<MenuOptionNode[]>([]);
  const [editorPath, setEditorPath] = useState<string[]>([]);
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
  const [copyText, setCopyText] = useState('Copy Generated Code');

  const pathNodes = useMemo(() => getPathNodes(rootOptions, editorPath), [rootOptions, editorPath]);
  const currentOptions = useMemo(() => getOptionsAtPath(rootOptions, editorPath), [rootOptions, editorPath]);
  const selectedBlock = useMemo(
    () => currentOptions.find((node) => node.id === selectedBlockId) ?? null,
    [currentOptions, selectedBlockId],
  );

  const currentMenuTitle = useMemo(() => {
    if (pathNodes.length === 0) {
      const title = menuTitle.trim();
      return title.length > 0 ? title : 'Root Menu';
    }

    const node = pathNodes[pathNodes.length - 1];
    const nestedTitle = node.submenuTitle.trim();
    return nestedTitle.length > 0 ? nestedTitle : node.label;
  }, [menuTitle, pathNodes]);

  const applyToCurrentOptions = (updater: (nodes: MenuOptionNode[]) => MenuOptionNode[]) => {
    setRootOptions((prev) => updateOptionsAtPath(prev, editorPath, updater));
  };

  const addOption = (type: MenuOptionType) => {
    applyToCurrentOptions((prev) => {
      const next = [...prev, createDefaultOption(type, prev.length + 1)];
      setSelectedBlockId(next[next.length - 1]?.id ?? null);
      return next;
    });
  };

  const removeOption = (id: string) => {
    applyToCurrentOptions((prev) => prev.filter((node) => node.id !== id));
    setSelectedBlockId((current) => (current === id ? null : current));
  };

  const moveOption = (id: string, direction: -1 | 1) => {
    applyToCurrentOptions((prev) => {
      const index = prev.findIndex((node) => node.id === id);
      if (index < 0) {
        return prev;
      }

      const nextIndex = index + direction;
      if (nextIndex < 0 || nextIndex >= prev.length) {
        return prev;
      }

      const copy = [...prev];
      const [node] = copy.splice(index, 1);
      copy.splice(nextIndex, 0, node);
      return copy;
    });
  };

  const updateOption = <K extends keyof MenuOptionNode>(id: string, key: K, value: MenuOptionNode[K]) => {
    applyToCurrentOptions((prev) => prev.map((node) => (node.id === id ? { ...node, [key]: value } : node)));
  };

  const changeOptionType = (id: string, type: MenuOptionType) => {
    applyToCurrentOptions((prev) => prev.map((node, index) => {
      if (node.id !== id) {
        return node;
      }

      const fresh = createDefaultOption(type, index + 1);
      return {
        ...fresh,
        id: node.id,
        label: node.label,
        todoTag: node.todoTag,
        submenuGenerateFlow: type === 'Submenu' ? node.submenuGenerateFlow : false,
        submenuTitle: type === 'Submenu' ? node.submenuTitle : fresh.submenuTitle,
        submenuOptions: type === 'Submenu' ? node.submenuOptions : [],
      };
    }));
  };

  const clearCurrentCanvas = () => {
    applyToCurrentOptions(() => []);
    setSelectedBlockId(null);
  };

  const goToRoot = () => {
    setEditorPath([]);
    setSelectedBlockId(null);
  };

  const goToPathIndex = (index: number) => {
    if (index < 0) {
      goToRoot();
      return;
    }

    setEditorPath((prev) => prev.slice(0, index + 1));
    setSelectedBlockId(null);
  };

  const enterSubmenuEditor = (id: string) => {
    applyToCurrentOptions((prev) => prev.map((node) => {
      if (node.id !== id) {
        return node;
      }

      return {
        ...node,
        type: 'Submenu',
        submenuGenerateFlow: true,
      };
    }));

    setEditorPath((prev) => [...prev, id]);
    setSelectedBlockId(null);
  };

  const generatedCode = useMemo(() => {
    const menuVar = sanitizeIdentifier(menuVariableName, 'generatedMenu');
    const rootTitle = menuTitle.trim().length > 0 ? menuTitle.trim() : '__TODO_MENU_TITLE__';
    const sanitizedComment = defaultComment.trim();
    const visibleItemCount = clampInt(maxVisibleItems, 1, 5);

    const behaviorChain = (indent: string): string[] => {
      const lines: string[] = [];
      lines.push(enableSound ? `${indent}.EnableSound()` : `${indent}.DisableSound()`);
      lines.push(`${indent}.SetPlayerFrozen(${freezePlayer ? 'true' : 'false'})`);
      lines.push(`${indent}.SetAutoCloseDelay(${floatLiteral(autoCloseDelay)})`);

      const selectLine = keybindLine(indent, 'SetSelectButton', selectKeybind);
      const moveLine = keybindLine(indent, 'SetMoveForwardButton', moveForwardKeybind);
      const moveBackLine = keybindLine(indent, 'SetMoveBackwardButton', moveBackwardKeybind);
      const exitLine = keybindLine(indent, 'SetExitButton', exitKeybind);

      if (selectLine) {
        lines.push(selectLine);
      }
      if (moveLine) {
        lines.push(moveLine);
      }
      if (moveBackLine) {
        lines.push(moveBackLine);
      }
      if (exitLine) {
        lines.push(exitLine);
      }

      return lines;
    };

    const designChain = (indent: string, title: string): string[] => {
      const lines: string[] = [];
      lines.push(`${indent}.Design.SetMenuTitle("${escapeCSharpString(title)}")`);
      lines.push(`${indent}.Design.SetMenuTitleVisible(${showTitle ? 'true' : 'false'})`);
      lines.push(`${indent}.Design.SetMenuTitleItemCountVisible(${showTitleCount ? 'true' : 'false'})`);
      lines.push(`${indent}.Design.SetMenuFooterVisible(${showFooter ? 'true' : 'false'})`);
      lines.push(`${indent}.Design.SetCommentVisible(${showComment ? 'true' : 'false'})`);
      lines.push(`${indent}.Design.SetMaxVisibleItems(${visibleItemCount})`);
      lines.push(`${indent}.Design.SetGlobalScrollStyle(MenuOptionScrollStyle.${globalScrollStyle})`);

      if (autoAdjustVisibleItems) {
        lines.push(`${indent}.Design.EnableAutoAdjustVisibleItems()`);
      } else {
        lines.push(`${indent}.Design.DisableAutoAdjustVisibleItems()`);
      }

      if (sanitizedComment.length > 0) {
        lines.push(`${indent}.Design.SetDefaultComment("${escapeCSharpString(sanitizedComment)}")`);
      }

      if (navigationMarkerColor.trim().length > 0) {
        lines.push(`${indent}.Design.SetNavigationMarkerColor("${escapeCSharpString(navigationMarkerColor.trim())}")`);
      }

      if (menuFooterColor.trim().length > 0) {
        lines.push(`${indent}.Design.SetMenuFooterColor("${escapeCSharpString(menuFooterColor.trim())}")`);
      }

      if (visualGuideLineColor.trim().length > 0) {
        lines.push(`${indent}.Design.SetVisualGuideLineColor("${escapeCSharpString(visualGuideLineColor.trim())}")`);
      }

      if (disabledOptionColor.trim().length > 0) {
        lines.push(`${indent}.Design.SetDisabledColor("${escapeCSharpString(disabledOptionColor.trim())}")`);
      }

      return lines;
    };

    const optionDeclarations = (nodes: MenuOptionNode[], indent: string): string[] => {
      const lines: string[] = [];

      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        const optionVar = `option${i + 1}`;
        const label = escapeCSharpString(node.label.trim().length > 0 ? node.label : `${node.type} Option ${i + 1}`);
        const todoTag = node.todoTag.trim().length > 0 ? node.todoTag.trim() : `OPTION_${i + 1}`;

        if (node.type === 'Button') {
          lines.push(`${indent}var ${optionVar} = new ButtonMenuOption("${label}");`);
          lines.push(`${indent}${optionVar}.Click += async (sender, args) =>`);
          lines.push(`${indent}{`);
          lines.push(`${indent}    // TODO(${todoTag}): Implement button action.`);
          lines.push(`${indent}    return ValueTask.CompletedTask;`);
          lines.push(`${indent}};`);
          lines.push('');
          continue;
        }

        if (node.type === 'Toggle') {
          lines.push(`${indent}var ${optionVar} = new ToggleMenuOption("${label}", defaultToggleState: ${node.defaultToggleState ? 'true' : 'false'});`);
          lines.push(`${indent}${optionVar}.ValueChanged += (sender, args) =>`);
          lines.push(`${indent}{`);
          lines.push(`${indent}    // TODO(${todoTag}): Apply args.NewValue for this player.`);
          lines.push(`${indent}};`);
          lines.push('');
          continue;
        }

        if (node.type === 'Slider') {
          lines.push(`${indent}var ${optionVar} = new SliderMenuOption(`);
          lines.push(`${indent}    text: "${label}",`);
          lines.push(`${indent}    min: ${floatLiteral(node.sliderMin)},`);
          lines.push(`${indent}    max: ${floatLiteral(node.sliderMax)},`);
          lines.push(`${indent}    defaultValue: ${floatLiteral(node.sliderDefault)},`);
          lines.push(`${indent}    step: ${floatLiteral(node.sliderStep)},`);
          lines.push(`${indent}    totalBars: ${clampInt(node.sliderBars, 1, 20)}`);
          lines.push(`${indent});`);
          lines.push(`${indent}${optionVar}.ValueChanged += (sender, args) =>`);
          lines.push(`${indent}{`);
          lines.push(`${indent}    // TODO(${todoTag}): Use args.NewValue.`);
          lines.push(`${indent}};`);
          lines.push('');
          continue;
        }

        if (node.type === 'Choice') {
          const parsedChoices = node.choicesCsv
            .split(',')
            .map((part) => part.trim())
            .filter((part) => part.length > 0);
          const choices = parsedChoices.length > 0
            ? parsedChoices
            : ['__TODO_CHOICE_A__', '__TODO_CHOICE_B__'];
          const defaultChoice = node.defaultChoice.trim().length > 0
            ? node.defaultChoice.trim()
            : choices[0];

          lines.push(`${indent}var ${optionVar}Choices = new[] { ${choices.map((choice) => `"${escapeCSharpString(choice)}"`).join(', ')} };`);
          lines.push(`${indent}var ${optionVar} = new ChoiceMenuOption("${label}", ${optionVar}Choices, defaultChoice: "${escapeCSharpString(defaultChoice)}");`);
          lines.push(`${indent}${optionVar}.ValueChanged += (sender, args) =>`);
          lines.push(`${indent}{`);
          lines.push(`${indent}    // TODO(${todoTag}): React to args.OldValue/args.NewValue.`);
          lines.push(`${indent}};`);
          lines.push('');
          continue;
        }

        if (node.type === 'Input') {
          const hint = escapeCSharpString(node.inputHint.trim().length > 0 ? node.inputHint : '__TODO_INPUT_HINT__');
          lines.push(`${indent}var ${optionVar} = new InputMenuOption(`);
          lines.push(`${indent}    text: "${label}",`);
          lines.push(`${indent}    maxLength: ${clampInt(node.inputMaxLength, 1, 128)},`);
          lines.push(`${indent}    validator: value =>`);
          lines.push(`${indent}    {`);
          lines.push(`${indent}        // TODO(${todoTag}_VALIDATE): Add validation rules.`);
          lines.push(`${indent}        return true;`);
          lines.push(`${indent}    },`);
          lines.push(`${indent}    defaultValue: "${escapeCSharpString(node.inputDefaultValue)}",`);
          lines.push(`${indent}    hintMessage: "${hint}"`);
          lines.push(`${indent});`);
          lines.push(`${indent}${optionVar}.ValueChanged += (sender, args) =>`);
          lines.push(`${indent}{`);
          lines.push(`${indent}    // TODO(${todoTag}): Persist args.NewValue.`);
          lines.push(`${indent}};`);
          lines.push('');
          continue;
        }

        if (node.type === 'Text') {
          lines.push(`${indent}var ${optionVar} = new TextMenuOption("${label}");`);
          lines.push(`${indent}// TODO(${todoTag}): Optionally set ${optionVar}.TextSize / ${optionVar}.TextStyle.`);
          lines.push('');
          continue;
        }

        if (node.submenuGenerateFlow) {
          const submenuTitle = node.submenuTitle.trim().length > 0
            ? node.submenuTitle.trim()
            : `${node.label} Submenu`;

          lines.push(`${indent}var ${optionVar} = new SubmenuMenuOption("${label}", () =>`);
          lines.push(`${indent}{`);

          if (node.submenuOptions.length === 0) {
            lines.push(`${indent}    // TODO(${todoTag}_SUBMENU): Add submenu blocks in the visual editor.`);
          }

          const nestedDeclarations = optionDeclarations(node.submenuOptions, `${indent}    `);
          if (nestedDeclarations.length > 0) {
            lines.push(...nestedDeclarations);
          }

          lines.push(`${indent}    var submenuMenu = Core.MenusAPI.CreateBuilder()`);
          lines.push(...behaviorChain(`${indent}        `));
          lines.push(...designChain(`${indent}        `, submenuTitle));

          for (let j = 0; j < node.submenuOptions.length; j += 1) {
            lines.push(`${indent}        .AddOption(option${j + 1})`);
          }

          lines.push(`${indent}        .Build();`);
          lines.push('');
          lines.push(`${indent}    return submenuMenu;`);
          lines.push(`${indent}});`);
          lines.push('');
          continue;
        }

        lines.push(`${indent}var ${optionVar} = new SubmenuMenuOption("${label}", () =>`);
        lines.push(`${indent}{`);
        lines.push(`${indent}    // TODO(${todoTag}): Build submenu content or enable generated flow in the inspector.`);
        lines.push(`${indent}    return Core.MenusAPI.CreateBuilder()`);
        lines.push(`${indent}        .Design.SetMenuTitle("__TODO_SUBMENU_TITLE__")`);
        lines.push(`${indent}        .AddOption(new TextMenuOption("__TODO_SUBMENU_OPTION__"))`);
        lines.push(`${indent}        .Build();`);
        lines.push(`${indent}});`);
        lines.push('');
      }

      return lines;
    };

    const lines: string[] = [];
    lines.push('// Generated by MenuVisualBuilder (SwiftlyS2 current API)');
    lines.push('// TODO: Add or adjust using directives for your plugin file.');
    lines.push('// using SwiftlyS2.Core.Menus.OptionsBase;');
    lines.push('// using SwiftlyS2.Shared.Menus;');
    lines.push('// using System.Threading.Tasks;');
    lines.push('');

    const rootDeclarations = optionDeclarations(rootOptions, '');
    if (rootDeclarations.length > 0) {
      lines.push(...rootDeclarations);
    }

    lines.push(`var ${menuVar} = Core.MenusAPI.CreateBuilder()`);
    lines.push(...behaviorChain('    '));
    lines.push(...designChain('    ', rootTitle));

    for (let i = 0; i < rootOptions.length; i += 1) {
      lines.push(`    .AddOption(option${i + 1})`);
    }

    lines.push('    .Build();');
    lines.push('');

    if (openMode === 'AllPlayers') {
      lines.push(`Core.MenusAPI.OpenMenu(${menuVar});`);
    } else {
      const playerVar = playerPlaceholder.trim().length > 0 ? playerPlaceholder.trim() : '__TODO_PLAYER__';
      lines.push(`Core.MenusAPI.OpenMenuForPlayer(${playerVar}, ${menuVar});`);
    }

    lines.push('// TODO: Store menu reference where needed for later CloseMenu/CloseActiveMenu calls.');

    return lines.join('\n');
  }, [
    autoAdjustVisibleItems,
    autoCloseDelay,
    defaultComment,
    disabledOptionColor,
    enableSound,
    exitKeybind,
    freezePlayer,
    globalScrollStyle,
    maxVisibleItems,
    menuTitle,
    menuFooterColor,
    menuVariableName,
    moveBackwardKeybind,
    moveForwardKeybind,
    navigationMarkerColor,
    openMode,
    playerPlaceholder,
    rootOptions,
    selectKeybind,
    showComment,
    showFooter,
    showTitle,
    showTitleCount,
    visualGuideLineColor,
  ]);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);
      setCopyText('Copied');
      setTimeout(() => setCopyText('Copy Generated Code'), 1800);
    } catch {
      setCopyText('Copy failed');
      setTimeout(() => setCopyText('Copy Generated Code'), 1800);
    }
  };

  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-fd-border/60 bg-gradient-to-b from-fd-card/80 via-fd-background to-fd-background p-4 shadow-xl backdrop-blur-md md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-fd-border/50 pb-4">
        <div className="flex items-center gap-3">
          <div>
            <h3 className="text-xl font-bold tracking-tight">Menu Visual Builder</h3>
            <p className="text-sm text-fd-muted-foreground/80">
              Build menu logic with connected blocks, including recursive submenu flows.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-fd-border/40 bg-fd-card/50 px-4 py-2.5 text-sm font-medium shadow-sm">
        <button
          type="button"
          onClick={goToRoot}
          className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 transition-colors active:scale-95 ${
            editorPath.length === 0
              ? 'bg-sky-500/15 text-sky-400 shadow-[inset_0_1px_rgba(255,255,255,0.1)]'
              : 'text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-foreground'
          }`}
        >
          <Home className="h-4 w-4" />
          Root Menu
        </button>
        
        {pathNodes.map((node, index) => (
          <div key={`crumb-${node.id}`} className="flex items-center gap-1.5">
            <ChevronRight className="h-4 w-4 text-fd-muted-foreground/40" />
            <button
              type="button"
              onClick={() => goToPathIndex(index)}
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 transition-colors active:scale-95 ${
                index === pathNodes.length - 1
                  ? 'bg-sky-500/15 text-sky-400 shadow-[inset_0_1px_rgba(255,255,255,0.1)]'
                  : 'text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-foreground'
              }`}
            >
              <FolderTree className="h-4 w-4" />
              {node.submenuTitle.trim().length > 0 ? node.submenuTitle : node.label}
            </button>
          </div>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[280px_minmax(0,1fr)_420px]">
        <div className="flex flex-col gap-4">
          <div className="rounded-xl border border-fd-border/50 bg-fd-card/80 p-5 shadow-sm backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-2">
              <PanelRightClose className="h-5 w-5 text-fd-primary/60" />
              <h4 className="text-sm font-bold uppercase tracking-wider text-fd-foreground/90">Block Toolbox</h4>
            </div>
            <p className="mb-4 text-xs font-medium text-fd-muted-foreground/70">
              Editing: <span className="text-fd-foreground">{currentMenuTitle}</span>
            </p>
            <div className="grid grid-cols-2 gap-2">
              {OPTION_TYPES.map((type) => {
                const Icon = OPTION_ICONS[type];
                return (
                  <button
                    key={`toolbox-${type}`}
                    type="button"
                    onClick={() => addOption(type)}
                    className={`flex items-center justify-center gap-2 rounded-md border px-2 py-2 text-xs font-medium transition hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] ${OPTION_COLORS[type]}`}
                  >
                    <Icon className="h-4 w-4 opacity-75" />
                    <span>{type}</span>
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              onClick={clearCurrentCanvas}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border border-red-400/40 bg-red-500/5 px-2 py-2 text-xs font-semibold text-red-400 transition hover:bg-red-500/10 active:scale-[0.98]"
            >
              <Trash2 className="h-4 w-4" />
              Clear Current Canvas
            </button>
          </div>

          <div className="rounded-xl border border-fd-border/50 bg-fd-card/80 p-5 shadow-sm backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-2">
              <Settings2 className="h-5 w-5 text-fd-primary/60" />
              <h4 className="text-sm font-bold uppercase tracking-wider text-fd-foreground/90">Menu Setup</h4>
            </div>
            <div className="flex flex-col gap-4">
              <label className="flex flex-col gap-1.5 text-sm font-medium">
                Root menu variable name
                <input
                  type="text"
                  value={menuVariableName}
                  onChange={(event) => setMenuVariableName(event.target.value)}
                  className="rounded-md border border-fd-border bg-fd-background px-3 py-2.5 text-sm shadow-sm transition-colors focus:border-sky-400/50 focus:outline-none focus:ring-1 focus:ring-sky-400/20 hover:border-fd-primary/30"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium">
                Root menu title
                <input
                  type="text"
                  value={menuTitle}
                  onChange={(event) => setMenuTitle(event.target.value)}
                  className="rounded-md border border-fd-border bg-fd-background px-3 py-2.5 text-sm shadow-sm transition-colors focus:border-sky-400/50 focus:outline-none focus:ring-1 focus:ring-sky-400/20 hover:border-fd-primary/30"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium">
                Default comment
                <input
                  type="text"
                  value={defaultComment}
                  onChange={(event) => setDefaultComment(event.target.value)}
                  className="rounded-md border border-fd-border bg-fd-background px-3 py-2.5 text-sm shadow-sm transition-colors focus:border-sky-400/50 focus:outline-none focus:ring-1 focus:ring-sky-400/20 hover:border-fd-primary/30"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium">
                Max visible items (1-5)
                <input
                  type="number"
                  min={1}
                  max={5}
                  value={maxVisibleItems}
                  onChange={(event) => setMaxVisibleItems(Number(event.target.value))}
                  className="rounded-md border border-fd-border bg-fd-background px-3 py-2.5 text-sm shadow-sm transition-colors focus:border-sky-400/50 focus:outline-none focus:ring-1 focus:ring-sky-400/20 hover:border-fd-primary/30"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium">
                Auto close delay (seconds)
                <input
                  type="number"
                  min={0}
                  step="0.5"
                  value={autoCloseDelay}
                  onChange={(event) => setAutoCloseDelay(Number(event.target.value))}
                  className="rounded-md border border-fd-border bg-fd-background px-3 py-2.5 text-sm shadow-sm transition-colors focus:border-sky-400/50 focus:outline-none focus:ring-1 focus:ring-sky-400/20 hover:border-fd-primary/30"
                />
              </label>
            </div>
          </div>

          <div className="rounded-xl border border-sky-400/20 bg-sky-500/5 p-5 shadow-sm backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-2">
              <Code2 className="h-5 w-5 text-sky-400" />
              <h4 className="text-sm font-bold uppercase tracking-wider text-fd-foreground/90">Selected Block</h4>
            </div>
            {selectedBlock == null ? (
              <p className="text-xs text-fd-muted-foreground">
                Select a block on the canvas to edit its settings.
              </p>
            ) : (
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className={`rounded-md border px-2 py-1 text-xs ${OPTION_COLORS[selectedBlock.type]}`}>
                    {selectedBlock.type}
                  </span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => moveOption(selectedBlock.id, -1)}
                      className="rounded-md border border-fd-border px-2 py-1 text-xs hover:bg-fd-accent"
                    >
                      Up
                    </button>
                    <button
                      type="button"
                      onClick={() => moveOption(selectedBlock.id, 1)}
                      className="rounded-md border border-fd-border px-2 py-1 text-xs hover:bg-fd-accent"
                    >
                      Down
                    </button>
                    <button
                      type="button"
                      onClick={() => removeOption(selectedBlock.id)}
                      className="rounded-md border border-red-400/60 px-2 py-1 text-xs text-red-500 hover:bg-red-500/10"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                <label className="flex flex-col gap-1 text-sm">
                  Block type
                  <select
                    value={selectedBlock.type}
                    onChange={(event) => changeOptionType(selectedBlock.id, event.target.value as MenuOptionType)}
                    className="rounded-md border border-fd-border bg-fd-background px-2 py-2 outline-none"
                  >
                    {OPTION_TYPES.map((type) => (
                      <option key={`selected-${type}`} value={type}>{type}</option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col gap-1 text-sm">
                  Label
                  <input
                    type="text"
                    value={selectedBlock.label}
                    onChange={(event) => updateOption(selectedBlock.id, 'label', event.target.value)}
                    className="rounded-md border border-fd-border bg-fd-background px-3 py-2 outline-none"
                  />
                </label>

                <label className="flex flex-col gap-1 text-sm">
                  TODO tag
                  <input
                    type="text"
                    value={selectedBlock.todoTag}
                    onChange={(event) => updateOption(selectedBlock.id, 'todoTag', event.target.value)}
                    className="rounded-md border border-fd-border bg-fd-background px-3 py-2 outline-none"
                  />
                </label>

                {selectedBlock.type === 'Toggle' ? (
                  <TogglePill
                    label="Default toggle state"
                    active={selectedBlock.defaultToggleState}
                    onToggle={(next) => updateOption(selectedBlock.id, 'defaultToggleState', next)}
                    description="Initial state for players that have no saved value yet."
                  />
                ) : null}

                {selectedBlock.type === 'Slider' ? (
                  <div className="grid gap-2 grid-cols-2">
                    <label className="flex flex-col gap-1 text-sm">
                      Min
                      <input
                        type="number"
                        value={selectedBlock.sliderMin}
                        onChange={(event) => updateOption(selectedBlock.id, 'sliderMin', Number(event.target.value))}
                        className="rounded-md border border-fd-border bg-fd-background px-2 py-2 outline-none"
                      />
                    </label>
                    <label className="flex flex-col gap-1 text-sm">
                      Max
                      <input
                        type="number"
                        value={selectedBlock.sliderMax}
                        onChange={(event) => updateOption(selectedBlock.id, 'sliderMax', Number(event.target.value))}
                        className="rounded-md border border-fd-border bg-fd-background px-2 py-2 outline-none"
                      />
                    </label>
                    <label className="flex flex-col gap-1 text-sm">
                      Default
                      <input
                        type="number"
                        value={selectedBlock.sliderDefault}
                        onChange={(event) => updateOption(selectedBlock.id, 'sliderDefault', Number(event.target.value))}
                        className="rounded-md border border-fd-border bg-fd-background px-2 py-2 outline-none"
                      />
                    </label>
                    <label className="flex flex-col gap-1 text-sm">
                      Step
                      <input
                        type="number"
                        value={selectedBlock.sliderStep}
                        onChange={(event) => updateOption(selectedBlock.id, 'sliderStep', Number(event.target.value))}
                        className="rounded-md border border-fd-border bg-fd-background px-2 py-2 outline-none"
                      />
                    </label>
                    <label className="flex flex-col gap-1 text-sm col-span-2">
                      Bars
                      <input
                        type="number"
                        min={1}
                        max={20}
                        value={selectedBlock.sliderBars}
                        onChange={(event) => updateOption(selectedBlock.id, 'sliderBars', Number(event.target.value))}
                        className="rounded-md border border-fd-border bg-fd-background px-2 py-2 outline-none"
                      />
                    </label>
                  </div>
                ) : null}

                {selectedBlock.type === 'Choice' ? (
                  <div className="grid gap-2">
                    <label className="flex flex-col gap-1 text-sm">
                      Choices (comma separated)
                      <input
                        type="text"
                        value={selectedBlock.choicesCsv}
                        onChange={(event) => updateOption(selectedBlock.id, 'choicesCsv', event.target.value)}
                        className="rounded-md border border-fd-border bg-fd-background px-3 py-2 outline-none"
                      />
                    </label>
                    <label className="flex flex-col gap-1 text-sm">
                      Default choice
                      <input
                        type="text"
                        value={selectedBlock.defaultChoice}
                        onChange={(event) => updateOption(selectedBlock.id, 'defaultChoice', event.target.value)}
                        className="rounded-md border border-fd-border bg-fd-background px-3 py-2 outline-none"
                      />
                    </label>
                  </div>
                ) : null}

                {selectedBlock.type === 'Input' ? (
                  <div className="grid gap-2">
                    <label className="flex flex-col gap-1 text-sm">
                      Max length
                      <input
                        type="number"
                        min={1}
                        max={128}
                        value={selectedBlock.inputMaxLength}
                        onChange={(event) => updateOption(selectedBlock.id, 'inputMaxLength', Number(event.target.value))}
                        className="rounded-md border border-fd-border bg-fd-background px-2 py-2 outline-none"
                      />
                    </label>
                    <label className="flex flex-col gap-1 text-sm">
                      Default value
                      <input
                        type="text"
                        value={selectedBlock.inputDefaultValue}
                        onChange={(event) => updateOption(selectedBlock.id, 'inputDefaultValue', event.target.value)}
                        className="rounded-md border border-fd-border bg-fd-background px-3 py-2 outline-none"
                      />
                    </label>
                    <label className="flex flex-col gap-1 text-sm">
                      Hint message
                      <input
                        type="text"
                        value={selectedBlock.inputHint}
                        onChange={(event) => updateOption(selectedBlock.id, 'inputHint', event.target.value)}
                        className="rounded-md border border-fd-border bg-fd-background px-3 py-2 outline-none"
                      />
                    </label>
                  </div>
                ) : null}

                {selectedBlock.type === 'Submenu' ? (
                  <div className="space-y-2 rounded-md border border-fd-border bg-fd-background p-3">
                    <TogglePill
                      label="Generate submenu from nested blocks"
                      active={selectedBlock.submenuGenerateFlow}
                      onToggle={(next) => updateOption(selectedBlock.id, 'submenuGenerateFlow', next)}
                      description="When enabled, code is emitted from this submenu canvas recursively."
                    />
                    <label className="flex flex-col gap-1 text-sm">
                      Submenu title
                      <input
                        type="text"
                        value={selectedBlock.submenuTitle}
                        onChange={(event) => updateOption(selectedBlock.id, 'submenuTitle', event.target.value)}
                        className="rounded-md border border-fd-border bg-fd-card px-3 py-2 outline-none"
                      />
                    </label>
                    <div className="flex items-center justify-between gap-2 text-xs text-fd-muted-foreground">
                      <span>{selectedBlock.submenuOptions.length} nested block{selectedBlock.submenuOptions.length === 1 ? '' : 's'}</span>
                      <button
                        type="button"
                        onClick={() => enterSubmenuEditor(selectedBlock.id)}
                        className="rounded-md border border-fd-border bg-fd-card px-2 py-1 text-xs hover:bg-fd-accent"
                      >
                        Edit Submenu Canvas
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>

        <div className="rounded-xl border border-fd-border bg-fd-card/40">
          <div className="flex items-center justify-between border-b border-fd-border px-4 py-3">
            <h4 className="text-sm font-semibold uppercase tracking-wide">Canvas</h4>
            <span className="text-xs text-fd-muted-foreground">
              {currentOptions.length} block{currentOptions.length === 1 ? '' : 's'} in {currentMenuTitle}
            </span>
          </div>
          <div className="relative min-h-[680px] overflow-auto">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.24)_1px,transparent_0)] [background-size:18px_18px]" />
            <div className="relative mx-auto max-w-2xl p-6">
              <div className="mx-auto w-fit rounded-lg border border-emerald-400/50 bg-emerald-500/10 px-4 py-3 text-center text-sm text-emerald-100">
                <div className="text-xs uppercase tracking-wide text-emerald-300">Start</div>
                <div className="font-medium">{currentMenuTitle}</div>
              </div>

              {currentOptions.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mx-auto mt-8 w-fit rounded-xl border border-dashed border-fd-border bg-fd-background/50 px-6 py-4 text-center text-sm text-fd-muted-foreground shadow-sm backdrop-blur-sm"
                >
                  <Palette className="mx-auto mb-2 h-6 w-6 opacity-50" />
                  Select a block from the toolbox to start building
                </motion.div>
              ) : null}

              <AnimatePresence mode="popLayout">
                {currentOptions.map((node, index) => {
                  const isSelected = selectedBlockId === node.id;
                  const Icon = OPTION_ICONS[node.type];
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: -20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8, filter: 'blur(4px)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      key={node.id}
                      className="mt-4 flex flex-col items-center"
                    >
                      <div className="h-6 w-px bg-gradient-to-b from-fd-border/0 via-fd-border to-fd-border" />
                      <button
                        type="button"
                        onClick={() => setSelectedBlockId(node.id)}
                        className={`w-full max-w-xl cursor-default rounded-xl border px-4 py-4 text-left shadow-sm transition-all duration-200 outline-none ${
                          isSelected
                            ? 'border-sky-400 bg-sky-500/5 ring-4 ring-sky-400/20'
                            : 'border-fd-border bg-fd-card/80 hover:border-fd-primary/40 hover:bg-fd-card hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-3">
                            <span className="flex h-5 items-center justify-center rounded-md border border-fd-border bg-fd-background/60 px-2 text-[10px] font-bold uppercase tracking-widest text-fd-muted-foreground shadow-sm">
                              {index + 1}
                            </span>
                            <span className={`flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium shadow-sm ${OPTION_COLORS[node.type]}`}>
                              <Icon className="h-3.5 w-3.5" />
                              {node.type}
                            </span>
                          </div>
                          <span className="rounded-md bg-fd-background/50 px-2 py-1 font-mono text-[10px] tracking-tight text-fd-muted-foreground border border-fd-border/30">
                            {node.todoTag}
                          </span>
                        </div>
                        <div className="mt-3 text-base font-semibold tracking-tight">{node.label}</div>
                        {node.type === 'Submenu' ? (
                          <div className="mt-4 flex items-center justify-between gap-3 rounded-lg border border-rose-400/20 bg-rose-500/5 px-3 py-2 text-xs text-rose-200/80 shadow-inner">
                            <div className="flex items-center gap-2">
                              <FolderTree className="h-4 w-4" />
                              <span>
                                {node.submenuOptions.length} nested node{node.submenuOptions.length === 1 ? '' : 's'}
                                {node.submenuGenerateFlow ? ' (Automated)' : ' (Manual)'}
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={(event) => {
                                event.stopPropagation();
                                enterSubmenuEditor(node.id);
                              }}
                              className="group flex items-center gap-1 rounded-md border border-rose-400/30 bg-rose-400/20 px-3 py-1.5 font-medium text-rose-100 transition hover:bg-rose-400/30 active:scale-95"
                            >
                              Edit Flow
                              <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                            </button>
                          </div>
                        ) : null}
                      </button>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              <motion.div layout className="mt-4 flex flex-col items-center">
                <div className="h-6 w-px bg-gradient-to-b from-fd-border via-fd-border/50 to-transparent" />
                <div className="w-fit rounded-full border border-indigo-400/50 bg-indigo-500/10 px-6 py-2.5 text-center text-sm font-semibold tracking-wide text-indigo-200 shadow-sm backdrop-blur-md">
                  Output Generated
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-xl border border-fd-border/50 bg-fd-card/80 p-5 shadow-sm backdrop-blur-sm">
            <div className="mb-6 flex flex-col gap-1 border-b border-fd-border/50 pb-4">
              <div className="flex items-center gap-2">
                <Settings2 className="h-5 w-5 text-fd-primary/60" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-fd-foreground/90">Design Properties</h4>
              </div>
              <p className="text-xs text-fd-muted-foreground/80">Configure visual layout and colors.</p>
            </div>
            
            <div className="grid grid-cols-1 gap-2.5 text-sm">
              <TogglePill
                label="Enable sound"
                active={enableSound}
                onToggle={setEnableSound}
                description="Maps to EnableSound or DisableSound on the builder."
              />
              <TogglePill
                label="Freeze player"
                active={freezePlayer}
                onToggle={setFreezePlayer}
                description="Controls SetPlayerFrozen while menu is open."
              />
              <TogglePill
                label="Show menu title"
                active={showTitle}
                onToggle={setShowTitle}
                description="Design.SetMenuTitleVisible"
              />
              <TogglePill
                label="Show title item count"
                active={showTitleCount}
                onToggle={setShowTitleCount}
                description="Design.SetMenuTitleItemCountVisible"
              />
              <TogglePill
                label="Show footer"
                active={showFooter}
                onToggle={setShowFooter}
                description="Design.SetMenuFooterVisible"
              />
              <TogglePill
                label="Show comments"
                active={showComment}
                onToggle={setShowComment}
                description="Design.SetCommentVisible"
              />
              <TogglePill
                label="Auto adjust visible items"
                active={autoAdjustVisibleItems}
                onToggle={setAutoAdjustVisibleItems}
                description="EnableAutoAdjustVisibleItems or DisableAutoAdjustVisibleItems"
              />
            </div>

            <div className="mt-6 grid gap-4">
              <label className="flex flex-col gap-1.5 text-sm font-medium">
                Global scroll style
                <div className="relative mt-1">
                  <select
                    value={globalScrollStyle}
                    onChange={(event) => setGlobalScrollStyle(event.target.value as ScrollStyleValue)}
                    className="w-full appearance-none rounded-md border border-fd-border bg-fd-background px-3 py-2.5 text-sm shadow-sm transition-colors focus:border-sky-400/50 focus:outline-none focus:ring-1 focus:ring-sky-400/20 hover:border-fd-primary/30"
                  >
                    <option value="CenterFixed">CenterFixed</option>
                    <option value="LinearScroll">LinearScroll</option>
                    <option value="WaitingCenter">WaitingCenter</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-fd-muted-foreground/60">
                    <ChevronRight className="h-4 w-4 rotate-90" />
                  </div>
                </div>
              </label>

              <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <ColorPropertyInput
                  label="Navigation Marker"
                  value={navigationMarkerColor}
                  onChange={setNavigationMarkerColor}
                />
                <ColorPropertyInput
                  label="Menu Footer"
                  value={menuFooterColor}
                  onChange={setMenuFooterColor}
                />
                <ColorPropertyInput
                  label="Visual Guide Line"
                  value={visualGuideLineColor}
                  onChange={setVisualGuideLineColor}
                />
                <ColorPropertyInput
                  label="Disabled Option"
                  value={disabledOptionColor}
                  onChange={setDisabledOptionColor}
                />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-fd-border/50 bg-fd-card/80 p-5 shadow-sm backdrop-blur-sm">
            <div className="mb-6 flex flex-col gap-1 border-b border-fd-border/50 pb-4">
              <div className="flex items-center gap-2">
                <Keyboard className="h-5 w-5 text-fd-primary/60" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-fd-foreground/90">Controls</h4>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-sm font-medium">
                Select key
                <div className="relative mt-1">
                  <select
                    value={selectKeybind}
                    onChange={(event) => setSelectKeybind(event.target.value as KeyBindValue)}
                    className="w-full appearance-none rounded-md border border-fd-border bg-fd-background px-3 py-2.5 text-sm shadow-sm transition-colors focus:border-sky-400/50 focus:outline-none focus:ring-1 focus:ring-sky-400/20 hover:border-fd-primary/30"
                  >
                    {KEYBIND_VALUES.map((value) => (
                      <option key={`select-${value}`} value={value}>{value}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-fd-muted-foreground/60">
                    <ChevronRight className="h-4 w-4 rotate-90" />
                  </div>
                </div>
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium">
                Move forward key
                <div className="relative mt-1">
                  <select
                    value={moveForwardKeybind}
                    onChange={(event) => setMoveForwardKeybind(event.target.value as KeyBindValue)}
                    className="w-full appearance-none rounded-md border border-fd-border bg-fd-background px-3 py-2.5 text-sm shadow-sm transition-colors focus:border-sky-400/50 focus:outline-none focus:ring-1 focus:ring-sky-400/20 hover:border-fd-primary/30"
                >
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-fd-muted-foreground/60">
                    <ChevronRight className="h-4 w-4 rotate-90" />
                  </div>
                </div>
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium">
                Move backward key
                <div className="relative mt-1">
                  <select
                    value={moveBackwardKeybind}
                    onChange={(event) => setMoveBackwardKeybind(event.target.value as KeyBindValue)}
                    className="w-full appearance-none rounded-md border border-fd-border bg-fd-background px-3 py-2.5 text-sm shadow-sm transition-colors focus:border-sky-400/50 focus:outline-none focus:ring-1 focus:ring-sky-400/20 hover:border-fd-primary/30"
                  >
                    {KEYBIND_VALUES.map((value) => (
                      <option key={`back-${value}`} value={value}>{value}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-fd-muted-foreground/60">
                    <ChevronRight className="h-4 w-4 rotate-90" />
                  </div>
                </div>
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium">
                Exit key
                <div className="relative mt-1">
                  <select
                    value={exitKeybind}
                    onChange={(event) => setExitKeybind(event.target.value as KeyBindValue)}
                    className="w-full appearance-none rounded-md border border-fd-border bg-fd-background px-3 py-2.5 text-sm shadow-sm transition-colors focus:border-sky-400/50 focus:outline-none focus:ring-1 focus:ring-sky-400/20 hover:border-fd-primary/30"
                  >
                    {KEYBIND_VALUES.map((value) => (
                      <option key={`exit-${value}`} value={value}>{value}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-fd-muted-foreground/60">
                    <ChevronRight className="h-4 w-4 rotate-90" />
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div className="rounded-xl border border-fd-border/50 bg-fd-card/80 p-5 shadow-sm backdrop-blur-sm">
            <div className="mb-6 flex flex-col gap-1 border-b border-fd-border/50 pb-4">
              <div className="flex items-center gap-2">
                <PanelRightClose className="h-5 w-5 text-fd-primary/60" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-fd-foreground/90">Generated C#</h4>
              </div>
              <p className="text-xs text-fd-muted-foreground/80">
                Ready to copy into your SwiftlyS2 plugin project.
              </p>
            </div>
            
            <div className="mb-4 flex flex-col gap-3 text-sm">
              <label className="font-semibold text-fd-foreground/90">Open mode</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setOpenMode('SinglePlayer')}
                  className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center text-xs font-semibold shadow-sm transition active:scale-95 ${
                    openMode === 'SinglePlayer'
                      ? 'border-sky-400 bg-sky-500/10 text-sky-400 ring-2 ring-sky-400/20'
                      : 'border-fd-border bg-fd-background text-fd-muted-foreground hover:border-fd-primary/50 hover:bg-fd-accent'
                  }`}
                >
                  <Keyboard className="h-5 w-5" />
                  For One Player
                </button>
                <button
                  type="button"
                  onClick={() => setOpenMode('AllPlayers')}
                  className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center text-xs font-semibold shadow-sm transition active:scale-95 ${
                    openMode === 'AllPlayers'
                      ? 'border-sky-400 bg-sky-500/10 text-sky-400 ring-2 ring-sky-400/20'
                      : 'border-fd-border bg-fd-background text-fd-muted-foreground hover:border-fd-primary/50 hover:bg-fd-accent'
                  }`}
                >
                  <ListOrdered className="h-5 w-5" />
                  For All Players
                </button>
              </div>
              {openMode === 'SinglePlayer' ? (
                <label className="mt-2 flex flex-col gap-1.5 font-medium">
                  Player placeholder
                  <input
                    type="text"
                    value={playerPlaceholder}
                    onChange={(event) => setPlayerPlaceholder(event.target.value)}
                    className="rounded-md border border-fd-border bg-fd-background px-3 py-2.5 text-sm shadow-sm transition-colors focus:border-sky-400/50 focus:outline-none focus:ring-1 focus:ring-sky-400/20 hover:border-fd-primary/30"
                  />
                </label>
              ) : null}
            </div>

            <div className="relative mt-2">
              <button
                type="button"
                onClick={copyCode}
                className="absolute right-2 top-2 z-10 flex items-center gap-1.5 rounded-md border border-fd-border bg-fd-background/80 px-3 py-1.5 text-xs font-medium shadow-sm backdrop-blur-sm transition-all hover:bg-fd-accent active:scale-95"
              >
                {copyText === 'Copied' ? (
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
                {copyText === 'Copied' ? <span className="text-emerald-400">Copied</span> : copyText}
              </button>
              <div className="[&>pre>code]:!text-xs">
                <CodeBlock>
                  <Pre className="max-h-[600px] rounded-xl px-4 py-4 pt-12 text-sm">{generatedCode}</Pre>
                </CodeBlock>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
