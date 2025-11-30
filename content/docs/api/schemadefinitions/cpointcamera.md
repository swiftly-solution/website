---
title: CPointCamera
---

# Interface CPointCamera

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPointCamera : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointCamera>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPointCamera>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Active

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L32)

```csharp
ref bool Active { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AlignWithParent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L48)

```csharp
ref bool AlignWithParent { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AspectRatio

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L36)

```csharp
ref float AspectRatio { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Brightness

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L40)

```csharp
ref float Brightness { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CanHLTVUse

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L46)

```csharp
ref bool CanHLTVUse { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DegreesPerSecond

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L64)

```csharp
ref float DegreesPerSecond { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DofEnabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L50)

```csharp
ref bool DofEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DofFarBlurry

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L58)

```csharp
ref float DofFarBlurry { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DofFarCrisp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L56)

```csharp
ref float DofFarCrisp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DofNearBlurry

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L52)

```csharp
ref float DofNearBlurry { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DofNearCrisp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L54)

```csharp
ref float DofNearCrisp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DofTiltToGround

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L60)

```csharp
ref float DofTiltToGround { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FOV

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L18)

```csharp
ref float FOV { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogColor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L24)

```csharp
ref Color FogColor { get; }
```

#### Property Value

- [Color](/docs/api/natives/color)

### FogEnable

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L22)

```csharp
ref bool FogEnable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FogEnd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L28)

```csharp
ref float FogEnd { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogMaxDensity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L30)

```csharp
ref float FogMaxDensity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogStart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L26)

```csharp
ref float FogStart { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### IsOn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L66)

```csharp
ref bool IsOn { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Next

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L68)

```csharp
CPointCamera? Next { get; }
```

#### Property Value

- [CPointCamera](/docs/api/schemadefinitions/cpointcamera)?

### NoSky

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L38)

```csharp
ref bool NoSky { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Resolution

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L20)

```csharp
ref float Resolution { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TargetFOV

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L62)

```csharp
ref float TargetFOV { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### UseScreenAspectRatio

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L34)

```csharp
ref bool UseScreenAspectRatio { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ZFar

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L42)

```csharp
ref float ZFar { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ZNear

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L44)

```csharp
ref float ZNear { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### ActiveUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L77)

```csharp
void ActiveUpdated()
```

### AlignWithParentUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L85)

```csharp
void AlignWithParentUpdated()
```

### AspectRatioUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L79)

```csharp
void AspectRatioUpdated()
```

### BrightnessUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L81)

```csharp
void BrightnessUpdated()
```

### CanHLTVUseUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L84)

```csharp
void CanHLTVUseUpdated()
```

### DofEnabledUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L86)

```csharp
void DofEnabledUpdated()
```

### DofFarBlurryUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L90)

```csharp
void DofFarBlurryUpdated()
```

### DofFarCrispUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L89)

```csharp
void DofFarCrispUpdated()
```

### DofNearBlurryUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L87)

```csharp
void DofNearBlurryUpdated()
```

### DofNearCrispUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L88)

```csharp
void DofNearCrispUpdated()
```

### DofTiltToGroundUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L91)

```csharp
void DofTiltToGroundUpdated()
```

### FOVUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L70)

```csharp
void FOVUpdated()
```

### FogColorUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L73)

```csharp
void FogColorUpdated()
```

### FogEnableUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L72)

```csharp
void FogEnableUpdated()
```

### FogEndUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L75)

```csharp
void FogEndUpdated()
```

### FogMaxDensityUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L76)

```csharp
void FogMaxDensityUpdated()
```

### FogStartUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L74)

```csharp
void FogStartUpdated()
```

### NoSkyUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L80)

```csharp
void NoSkyUpdated()
```

### ResolutionUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L71)

```csharp
void ResolutionUpdated()
```

### UseScreenAspectRatioUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L78)

```csharp
void UseScreenAspectRatioUpdated()
```

### ZFarUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L82)

```csharp
void ZFarUpdated()
```

### ZNearUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointCamera.cs#L83)

```csharp
void ZNearUpdated()
```

