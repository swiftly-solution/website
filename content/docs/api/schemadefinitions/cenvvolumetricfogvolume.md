---
title: CEnvVolumetricFogVolume
---

# Interface CEnvVolumetricFogVolume

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CEnvVolumetricFogVolume : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CEnvVolumetricFogVolume>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CEnvVolumetricFogVolume>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Active

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L18)

```csharp
ref bool Active { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BoxMaxs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L22)

```csharp
ref Vector BoxMaxs { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### BoxMins

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L20)

```csharp
ref Vector BoxMins { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### FalloffExponent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L32)

```csharp
ref float FalloffExponent { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FalloffShape

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L30)

```csharp
ref int FalloffShape { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HeightFogDepth

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L34)

```csharp
ref float HeightFogDepth { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HeightFogEdgeWidth

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L36)

```csharp
ref float HeightFogEdgeWidth { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### IndirectLightStrength

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L38)

```csharp
ref float IndirectLightStrength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### IndirectUseLPVs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L26)

```csharp
ref bool IndirectUseLPVs { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NoiseStrength

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L42)

```csharp
ref float NoiseStrength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OverrideIndirectLightStrength

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L48)

```csharp
ref bool OverrideIndirectLightStrength { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OverrideNoiseStrength

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L52)

```csharp
ref bool OverrideNoiseStrength { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OverrideSunLightStrength

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L50)

```csharp
ref bool OverrideSunLightStrength { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OverrideTintColor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L46)

```csharp
ref bool OverrideTintColor { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartDisabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L24)

```csharp
ref bool StartDisabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Strength

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L28)

```csharp
ref float Strength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SunLightStrength

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L40)

```csharp
ref float SunLightStrength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TintColor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L44)

```csharp
ref Color TintColor { get; }
```

#### Property Value

- [Color](/docs/api/natives/color)

## Methods

### ActiveUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L54)

```csharp
void ActiveUpdated()
```

### BoxMaxsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L56)

```csharp
void BoxMaxsUpdated()
```

### BoxMinsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L55)

```csharp
void BoxMinsUpdated()
```

### FalloffExponentUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L61)

```csharp
void FalloffExponentUpdated()
```

### FalloffShapeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L60)

```csharp
void FalloffShapeUpdated()
```

### HeightFogDepthUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L62)

```csharp
void HeightFogDepthUpdated()
```

### HeightFogEdgeWidthUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L63)

```csharp
void HeightFogEdgeWidthUpdated()
```

### IndirectLightStrengthUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L64)

```csharp
void IndirectLightStrengthUpdated()
```

### IndirectUseLPVsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L58)

```csharp
void IndirectUseLPVsUpdated()
```

### NoiseStrengthUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L66)

```csharp
void NoiseStrengthUpdated()
```

### OverrideIndirectLightStrengthUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L69)

```csharp
void OverrideIndirectLightStrengthUpdated()
```

### OverrideNoiseStrengthUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L71)

```csharp
void OverrideNoiseStrengthUpdated()
```

### OverrideSunLightStrengthUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L70)

```csharp
void OverrideSunLightStrengthUpdated()
```

### OverrideTintColorUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L68)

```csharp
void OverrideTintColorUpdated()
```

### StartDisabledUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L57)

```csharp
void StartDisabledUpdated()
```

### StrengthUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L59)

```csharp
void StrengthUpdated()
```

### SunLightStrengthUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L65)

```csharp
void SunLightStrengthUpdated()
```

### TintColorUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvVolumetricFogVolume.cs#L67)

```csharp
void TintColorUpdated()
```

