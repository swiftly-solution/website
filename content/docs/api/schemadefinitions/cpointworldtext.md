---
title: CPointWorldText
---

# Interface CPointWorldText

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPointWorldText : CModelPointEntity, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CModelPointEntity>, ISchemaClass<CPointWorldText>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CModelPointEntity](/docs/api/schemadefinitions/cmodelpointentity)
- [CBaseModelEntity](/docs/api/schemadefinitions/cbasemodelentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseModelEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CModelPointEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPointWorldText>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BackgroundBorderHeight

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L38)

```csharp
ref float BackgroundBorderHeight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### BackgroundBorderWidth

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L36)

```csharp
ref float BackgroundBorderWidth { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### BackgroundMaterialName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L22)

```csharp
string BackgroundMaterialName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### BackgroundWorldToUV

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L40)

```csharp
ref float BackgroundWorldToUV { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Color

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L42)

```csharp
ref Color Color { get; }
```

#### Property Value

- [Color](/docs/api/natives/color)

### DepthOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L32)

```csharp
ref float DepthOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DrawBackground

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L34)

```csharp
ref bool DrawBackground { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Enabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L24)

```csharp
ref bool Enabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FontName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L20)

```csharp
string FontName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### FontSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L30)

```csharp
ref float FontSize { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Fullbright

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L26)

```csharp
ref bool Fullbright { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### JustifyHorizontal

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L44)

```csharp
ref PointWorldTextJustifyHorizontal_t JustifyHorizontal { get; }
```

#### Property Value

- [PointWorldTextJustifyHorizontal_t](/docs/api/schemadefinitions/pointworldtextjustifyhorizontal_t)

### JustifyVertical

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L46)

```csharp
ref PointWorldTextJustifyVertical_t JustifyVertical { get; }
```

#### Property Value

- [PointWorldTextJustifyVertical_t](/docs/api/schemadefinitions/pointworldtextjustifyvertical_t)

### MessageText

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L18)

```csharp
string MessageText { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ReorientMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L48)

```csharp
ref PointWorldTextReorientMode_t ReorientMode { get; }
```

#### Property Value

- [PointWorldTextReorientMode_t](/docs/api/schemadefinitions/pointworldtextreorientmode_t)

### WorldUnitsPerPx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L28)

```csharp
ref float WorldUnitsPerPx { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### BackgroundBorderHeightUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L60)

```csharp
void BackgroundBorderHeightUpdated()
```

### BackgroundBorderWidthUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L59)

```csharp
void BackgroundBorderWidthUpdated()
```

### BackgroundMaterialNameUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L52)

```csharp
void BackgroundMaterialNameUpdated()
```

### BackgroundWorldToUVUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L61)

```csharp
void BackgroundWorldToUVUpdated()
```

### ColorUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L62)

```csharp
void ColorUpdated()
```

### DepthOffsetUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L57)

```csharp
void DepthOffsetUpdated()
```

### DrawBackgroundUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L58)

```csharp
void DrawBackgroundUpdated()
```

### EnabledUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L53)

```csharp
void EnabledUpdated()
```

### FontNameUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L51)

```csharp
void FontNameUpdated()
```

### FontSizeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L56)

```csharp
void FontSizeUpdated()
```

### FullbrightUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L54)

```csharp
void FullbrightUpdated()
```

### JustifyHorizontalUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L63)

```csharp
void JustifyHorizontalUpdated()
```

### JustifyVerticalUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L64)

```csharp
void JustifyVerticalUpdated()
```

### MessageTextUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L50)

```csharp
void MessageTextUpdated()
```

### ReorientModeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L65)

```csharp
void ReorientModeUpdated()
```

### WorldUnitsPerPxUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointWorldText.cs#L55)

```csharp
void WorldUnitsPerPxUpdated()
```

