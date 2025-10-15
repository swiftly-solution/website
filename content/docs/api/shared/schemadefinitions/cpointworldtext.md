---
title: CPointWorldText
---

```csharp
public interface CPointWorldText : CModelPointEntity, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CModelPointEntity>, ISchemaClass<CPointWorldText>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BackgroundBorderHeight

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L37)

```csharp
ref float BackgroundBorderHeight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### BackgroundBorderWidth

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L35)

```csharp
ref float BackgroundBorderWidth { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### BackgroundMaterialName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L21)

```csharp
string BackgroundMaterialName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### BackgroundWorldToUV

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L39)

```csharp
ref float BackgroundWorldToUV { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Color

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L41)

```csharp
ref Color Color { get; }
```

#### Property Value

- [Color](/docs/api/shared/natives/color)

### DepthOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L31)

```csharp
ref float DepthOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DrawBackground

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L33)

```csharp
ref bool DrawBackground { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Enabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L23)

```csharp
ref bool Enabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FontName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L19)

```csharp
string FontName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### FontSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L29)

```csharp
ref float FontSize { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Fullbright

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L25)

```csharp
ref bool Fullbright { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### JustifyHorizontal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L43)

```csharp
ref PointWorldTextJustifyHorizontal_t JustifyHorizontal { get; }
```

#### Property Value

- [PointWorldTextJustifyHorizontal_t](/docs/api/shared/schemadefinitions/pointworldtextjustifyhorizontal_t)

### JustifyVertical

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L45)

```csharp
ref PointWorldTextJustifyVertical_t JustifyVertical { get; }
```

#### Property Value

- [PointWorldTextJustifyVertical_t](/docs/api/shared/schemadefinitions/pointworldtextjustifyvertical_t)

### MessageText

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L17)

```csharp
string MessageText { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ReorientMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L47)

```csharp
ref PointWorldTextReorientMode_t ReorientMode { get; }
```

#### Property Value

- [PointWorldTextReorientMode_t](/docs/api/shared/schemadefinitions/pointworldtextreorientmode_t)

### WorldUnitsPerPx

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L27)

```csharp
ref float WorldUnitsPerPx { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### BackgroundBorderHeightUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L59)

```csharp
void BackgroundBorderHeightUpdated()
```

### BackgroundBorderWidthUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L58)

```csharp
void BackgroundBorderWidthUpdated()
```

### BackgroundMaterialNameUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L51)

```csharp
void BackgroundMaterialNameUpdated()
```

### BackgroundWorldToUVUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L60)

```csharp
void BackgroundWorldToUVUpdated()
```

### ColorUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L61)

```csharp
void ColorUpdated()
```

### DepthOffsetUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L56)

```csharp
void DepthOffsetUpdated()
```

### DrawBackgroundUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L57)

```csharp
void DrawBackgroundUpdated()
```

### EnabledUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L52)

```csharp
void EnabledUpdated()
```

### FontNameUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L50)

```csharp
void FontNameUpdated()
```

### FontSizeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L55)

```csharp
void FontSizeUpdated()
```

### FullbrightUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L53)

```csharp
void FullbrightUpdated()
```

### JustifyHorizontalUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L62)

```csharp
void JustifyHorizontalUpdated()
```

### JustifyVerticalUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L63)

```csharp
void JustifyVerticalUpdated()
```

### MessageTextUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L49)

```csharp
void MessageTextUpdated()
```

### ReorientModeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L64)

```csharp
void ReorientModeUpdated()
```

### WorldUnitsPerPxUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L54)

```csharp
void WorldUnitsPerPxUpdated()
```

