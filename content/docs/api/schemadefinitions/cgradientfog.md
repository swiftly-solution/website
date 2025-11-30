---
title: CGradientFog
---

# Interface CGradientFog

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CGradientFog : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CGradientFog>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CGradientFog>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### FadeTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L42)

```csharp
ref float FadeTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FarZ

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L30)

```csharp
ref float FarZ { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogColor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L38)

```csharp
ref Color FogColor { get; }
```

#### Property Value

- [Color](/docs/api/natives/color)

### FogEndDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L22)

```csharp
ref float FogEndDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogEndHeight

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L28)

```csharp
ref float FogEndHeight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogFalloffExponent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L34)

```csharp
ref float FogFalloffExponent { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogMaxOpacity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L32)

```csharp
ref float FogMaxOpacity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogStartDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L20)

```csharp
ref float FogStartDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogStartHeight

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L26)

```csharp
ref float FogStartHeight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogStrength

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L40)

```csharp
ref float FogStrength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogVerticalExponent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L36)

```csharp
ref float FogVerticalExponent { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GradientFogNeedsTextures

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L48)

```csharp
ref bool GradientFogNeedsTextures { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GradientFogTexture

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L18)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> GradientFogTexture { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCTextureBase](/docs/api/schemadefinitions/infoforresourcetypectexturebase)>

### HeightFogEnabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L24)

```csharp
ref bool HeightFogEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsEnabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L46)

```csharp
ref bool IsEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartDisabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L44)

```csharp
ref bool StartDisabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### FadeTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L62)

```csharp
void FadeTimeUpdated()
```

### FarZUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L56)

```csharp
void FarZUpdated()
```

### FogColorUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L60)

```csharp
void FogColorUpdated()
```

### FogEndDistanceUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L52)

```csharp
void FogEndDistanceUpdated()
```

### FogEndHeightUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L55)

```csharp
void FogEndHeightUpdated()
```

### FogFalloffExponentUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L58)

```csharp
void FogFalloffExponentUpdated()
```

### FogMaxOpacityUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L57)

```csharp
void FogMaxOpacityUpdated()
```

### FogStartDistanceUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L51)

```csharp
void FogStartDistanceUpdated()
```

### FogStartHeightUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L54)

```csharp
void FogStartHeightUpdated()
```

### FogStrengthUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L61)

```csharp
void FogStrengthUpdated()
```

### FogVerticalExponentUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L59)

```csharp
void FogVerticalExponentUpdated()
```

### GradientFogTextureUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L50)

```csharp
void GradientFogTextureUpdated()
```

### HeightFogEnabledUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L53)

```csharp
void HeightFogEnabledUpdated()
```

### IsEnabledUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L64)

```csharp
void IsEnabledUpdated()
```

### StartDisabledUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L63)

```csharp
void StartDisabledUpdated()
```

