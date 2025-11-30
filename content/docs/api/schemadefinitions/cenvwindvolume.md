---
title: CEnvWindVolume
---

# Interface CEnvWindVolume

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindVolume.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CEnvWindVolume : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CEnvWindVolume>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CEnvWindVolume>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Active

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindVolume.cs#L18)

```csharp
ref bool Active { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BoxMaxs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindVolume.cs#L22)

```csharp
ref Vector BoxMaxs { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### BoxMins

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindVolume.cs#L20)

```csharp
ref Vector BoxMins { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Shape

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindVolume.cs#L26)

```csharp
ref int Shape { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### StartDisabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindVolume.cs#L24)

```csharp
ref bool StartDisabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WindDirectionVariationMultiplier

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindVolume.cs#L34)

```csharp
ref float WindDirectionVariationMultiplier { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WindSpeedMultiplier

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindVolume.cs#L28)

```csharp
ref float WindSpeedMultiplier { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WindSpeedVariationMultiplier

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindVolume.cs#L32)

```csharp
ref float WindSpeedVariationMultiplier { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WindTurbulenceMultiplier

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindVolume.cs#L30)

```csharp
ref float WindTurbulenceMultiplier { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### ActiveUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindVolume.cs#L36)

```csharp
void ActiveUpdated()
```

### BoxMaxsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindVolume.cs#L38)

```csharp
void BoxMaxsUpdated()
```

### BoxMinsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindVolume.cs#L37)

```csharp
void BoxMinsUpdated()
```

### ShapeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindVolume.cs#L40)

```csharp
void ShapeUpdated()
```

### StartDisabledUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindVolume.cs#L39)

```csharp
void StartDisabledUpdated()
```

### WindDirectionVariationMultiplierUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindVolume.cs#L44)

```csharp
void WindDirectionVariationMultiplierUpdated()
```

### WindSpeedMultiplierUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindVolume.cs#L41)

```csharp
void WindSpeedMultiplierUpdated()
```

### WindSpeedVariationMultiplierUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindVolume.cs#L43)

```csharp
void WindSpeedVariationMultiplierUpdated()
```

### WindTurbulenceMultiplierUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvWindVolume.cs#L42)

```csharp
void WindTurbulenceMultiplierUpdated()
```

