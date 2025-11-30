---
title: CPropDoorRotating
---

# Interface CPropDoorRotating

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPropDoorRotating : CBasePropDoor, CDynamicProp, CBreakableProp, CBaseProp, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseProp>, ISchemaClass<CBreakableProp>, ISchemaClass<CDynamicProp>, ISchemaClass<CBasePropDoor>, ISchemaClass<CPropDoorRotating>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBasePropDoor](/docs/api/schemadefinitions/cbasepropdoor)
- [CDynamicProp](/docs/api/schemadefinitions/cdynamicprop)
- [CBreakableProp](/docs/api/schemadefinitions/cbreakableprop)
- [CBaseProp](/docs/api/schemadefinitions/cbaseprop)
- [CBaseAnimGraph](/docs/api/schemadefinitions/cbaseanimgraph)
- [CBaseModelEntity](/docs/api/schemadefinitions/cbasemodelentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseModelEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseAnimGraph>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseProp>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBreakableProp>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CDynamicProp>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBasePropDoor>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPropDoorRotating>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AjarAngle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L30)

```csharp
ref float AjarAngle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AjarDoorShouldntAlwaysOpen

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L50)

```csharp
ref bool AjarDoorShouldntAlwaysOpen { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Axis

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L18)

```csharp
ref Vector Axis { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### BackBoundsMax

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L48)

```csharp
ref Vector BackBoundsMax { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### BackBoundsMin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L46)

```csharp
ref Vector BackBoundsMin { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### CurrentOpenDirection

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L26)

```csharp
ref PropDoorRotatingOpenDirection_e CurrentOpenDirection { get; }
```

#### Property Value

- [PropDoorRotatingOpenDirection_e](/docs/api/schemadefinitions/propdoorrotatingopendirection_e)

### DefaultCheckDirection

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L28)

```csharp
ref doorCheck_e DefaultCheckDirection { get; }
```

#### Property Value

- [doorCheck_e](/docs/api/schemadefinitions/doorcheck_e)

### Distance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L20)

```csharp
ref float Distance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EntityBlocker

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L52)

```csharp
ref CHandle<CEntityBlocker> EntityBlocker { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CEntityBlocker](/docs/api/schemadefinitions/centityblocker)>

### ForwardBoundsMax

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L44)

```csharp
ref Vector ForwardBoundsMax { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### ForwardBoundsMin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L42)

```csharp
ref Vector ForwardBoundsMin { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Goal

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L40)

```csharp
ref QAngle Goal { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### OpenDirection

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L24)

```csharp
ref PropDoorRotatingOpenDirection_e OpenDirection { get; }
```

#### Property Value

- [PropDoorRotatingOpenDirection_e](/docs/api/schemadefinitions/propdoorrotatingopendirection_e)

### RotationAjarDeprecated

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L32)

```csharp
ref QAngle RotationAjarDeprecated { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### RotationClosed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L34)

```csharp
ref QAngle RotationClosed { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### RotationOpenBack

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L38)

```csharp
ref QAngle RotationOpenBack { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### RotationOpenForward

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L36)

```csharp
ref QAngle RotationOpenForward { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### SpawnPosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L22)

```csharp
ref PropDoorRotatingSpawnPos_t SpawnPosition { get; }
```

#### Property Value

- [PropDoorRotatingSpawnPos_t](/docs/api/schemadefinitions/propdoorrotatingspawnpos_t)

