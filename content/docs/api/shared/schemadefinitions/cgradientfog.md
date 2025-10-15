---
title: CGradientFog
---

```csharp
public interface CGradientFog : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CGradientFog>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### FadeTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L41)

```csharp
ref float FadeTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FarZ

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L29)

```csharp
ref float FarZ { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogColor

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L37)

```csharp
ref Color FogColor { get; }
```

#### Property Value

- [Color](/docs/api/shared/natives/color)

### FogEndDistance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L21)

```csharp
ref float FogEndDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogEndHeight

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L27)

```csharp
ref float FogEndHeight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogFalloffExponent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L33)

```csharp
ref float FogFalloffExponent { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogMaxOpacity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L31)

```csharp
ref float FogMaxOpacity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogStartDistance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L19)

```csharp
ref float FogStartDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogStartHeight

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L25)

```csharp
ref float FogStartHeight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogStrength

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L39)

```csharp
ref float FogStrength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogVerticalExponent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L35)

```csharp
ref float FogVerticalExponent { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GradientFogNeedsTextures

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L47)

```csharp
ref bool GradientFogNeedsTextures { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GradientFogTexture

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L17)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> GradientFogTexture { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCTextureBase](/docs/api/shared/schemadefinitions/infoforresourcetypectexturebase)>

### HeightFogEnabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L23)

```csharp
ref bool HeightFogEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsEnabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L45)

```csharp
ref bool IsEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartDisabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L43)

```csharp
ref bool StartDisabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### FadeTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L61)

```csharp
void FadeTimeUpdated()
```

### FarZUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L55)

```csharp
void FarZUpdated()
```

### FogColorUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L59)

```csharp
void FogColorUpdated()
```

### FogEndDistanceUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L51)

```csharp
void FogEndDistanceUpdated()
```

### FogEndHeightUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L54)

```csharp
void FogEndHeightUpdated()
```

### FogFalloffExponentUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L57)

```csharp
void FogFalloffExponentUpdated()
```

### FogMaxOpacityUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L56)

```csharp
void FogMaxOpacityUpdated()
```

### FogStartDistanceUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L50)

```csharp
void FogStartDistanceUpdated()
```

### FogStartHeightUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L53)

```csharp
void FogStartHeightUpdated()
```

### FogStrengthUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L60)

```csharp
void FogStrengthUpdated()
```

### FogVerticalExponentUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L58)

```csharp
void FogVerticalExponentUpdated()
```

### GradientFogTextureUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L49)

```csharp
void GradientFogTextureUpdated()
```

### HeightFogEnabledUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L52)

```csharp
void HeightFogEnabledUpdated()
```

### IsEnabledUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L63)

```csharp
void IsEnabledUpdated()
```

### StartDisabledUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L62)

```csharp
void StartDisabledUpdated()
```

