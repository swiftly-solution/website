---
title: CEnvCubemapFog
---

# Interface CEnvCubemapFog

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CEnvCubemapFog : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CEnvCubemapFog>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CEnvCubemapFog>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Active

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L36)

```csharp
ref bool Active { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CubemapSourceType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L42)

```csharp
ref int CubemapSourceType { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EndDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L18)

```csharp
ref float EndDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FirstTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L52)

```csharp
ref bool FirstTime { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FogCubemapTexture

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L48)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> FogCubemapTexture { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCTextureBase](/docs/api/schemadefinitions/infoforresourcetypectexturebase)>

### FogFalloffExponent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L22)

```csharp
ref float FogFalloffExponent { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogHeightEnd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L28)

```csharp
ref float FogHeightEnd { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogHeightExponent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L32)

```csharp
ref float FogHeightExponent { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogHeightStart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L30)

```csharp
ref float FogHeightStart { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogHeightWidth

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L26)

```csharp
ref float FogHeightWidth { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogMaxOpacity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L40)

```csharp
ref float FogMaxOpacity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HasHeightFogEnd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L50)

```csharp
ref bool HasHeightFogEnd { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HeightFogEnabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L24)

```csharp
ref bool HeightFogEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LODBias

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L34)

```csharp
ref float LODBias { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SkyEntity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L46)

```csharp
string SkyEntity { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SkyMaterial

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L44)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> SkyMaterial { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeIMaterial2](/docs/api/schemadefinitions/infoforresourcetypeimaterial2)>

### StartDisabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L38)

```csharp
ref bool StartDisabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L20)

```csharp
ref float StartDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### ActiveUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L63)

```csharp
void ActiveUpdated()
```

### CubemapSourceTypeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L66)

```csharp
void CubemapSourceTypeUpdated()
```

### EndDistanceUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L54)

```csharp
void EndDistanceUpdated()
```

### FogCubemapTextureUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L69)

```csharp
void FogCubemapTextureUpdated()
```

### FogFalloffExponentUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L56)

```csharp
void FogFalloffExponentUpdated()
```

### FogHeightEndUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L59)

```csharp
void FogHeightEndUpdated()
```

### FogHeightExponentUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L61)

```csharp
void FogHeightExponentUpdated()
```

### FogHeightStartUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L60)

```csharp
void FogHeightStartUpdated()
```

### FogHeightWidthUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L58)

```csharp
void FogHeightWidthUpdated()
```

### FogMaxOpacityUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L65)

```csharp
void FogMaxOpacityUpdated()
```

### HasHeightFogEndUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L70)

```csharp
void HasHeightFogEndUpdated()
```

### HeightFogEnabledUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L57)

```csharp
void HeightFogEnabledUpdated()
```

### LODBiasUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L62)

```csharp
void LODBiasUpdated()
```

### SkyEntityUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L68)

```csharp
void SkyEntityUpdated()
```

### SkyMaterialUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L67)

```csharp
void SkyMaterialUpdated()
```

### StartDisabledUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L64)

```csharp
void StartDisabledUpdated()
```

### StartDistanceUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L55)

```csharp
void StartDistanceUpdated()
```

