---
title: CEnvWindController
---

# Interface CEnvWindController

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CEnvWindController : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CEnvWindController>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CEnvWindController>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ClipmapLevels

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L34)

```csharp
ref int ClipmapLevels { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DirectionVariation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L20)

```csharp
ref float DirectionVariation { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EnvWindShared

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L18)

```csharp
CEnvWindShared EnvWindShared { get; }
```

#### Property Value

- [CEnvWindShared](/docs/api/schemadefinitions/cenvwindshared)

### FirstTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L38)

```csharp
ref bool FirstTime { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsMaster

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L36)

```csharp
ref bool IsMaster { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SpeedVariation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L22)

```csharp
ref float SpeedVariation { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Turbulence

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L24)

```csharp
ref float Turbulence { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### VolumeHalfExtentXY

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L26)

```csharp
ref float VolumeHalfExtentXY { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### VolumeHalfExtentZ

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L28)

```csharp
ref float VolumeHalfExtentZ { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### VolumeResolutionXY

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L30)

```csharp
ref int VolumeResolutionXY { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### VolumeResolutionZ

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L32)

```csharp
ref int VolumeResolutionZ { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### ClipmapLevelsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L48)

```csharp
void ClipmapLevelsUpdated()
```

### DirectionVariationUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L41)

```csharp
void DirectionVariationUpdated()
```

### EnvWindSharedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L40)

```csharp
void EnvWindSharedUpdated()
```

### IsMasterUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L49)

```csharp
void IsMasterUpdated()
```

### SpeedVariationUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L42)

```csharp
void SpeedVariationUpdated()
```

### TurbulenceUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L43)

```csharp
void TurbulenceUpdated()
```

### VolumeHalfExtentXYUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L44)

```csharp
void VolumeHalfExtentXYUpdated()
```

### VolumeHalfExtentZUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L45)

```csharp
void VolumeHalfExtentZUpdated()
```

### VolumeResolutionXYUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L46)

```csharp
void VolumeResolutionXYUpdated()
```

### VolumeResolutionZUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindController.cs#L47)

```csharp
void VolumeResolutionZUpdated()
```

