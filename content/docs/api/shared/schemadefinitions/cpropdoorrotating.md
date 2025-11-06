---
title: CPropDoorRotating
---

```csharp
public interface CPropDoorRotating : CBasePropDoor, CDynamicProp, CBreakableProp, CBaseProp, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseProp>, ISchemaClass<CBreakableProp>, ISchemaClass<CDynamicProp>, ISchemaClass<CBasePropDoor>, ISchemaClass<CPropDoorRotating>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AjarAngle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L29)

```csharp
ref float AjarAngle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AjarDoorShouldntAlwaysOpen

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L49)

```csharp
ref bool AjarDoorShouldntAlwaysOpen { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Axis

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L17)

```csharp
ref Vector Axis { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### BackBoundsMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L47)

```csharp
ref Vector BackBoundsMax { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### BackBoundsMin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L45)

```csharp
ref Vector BackBoundsMin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### CurrentOpenDirection

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L25)

```csharp
ref PropDoorRotatingOpenDirection_e CurrentOpenDirection { get; }
```

#### Property Value

- [PropDoorRotatingOpenDirection_e](/docs/api/shared/schemadefinitions/propdoorrotatingopendirection_e)

### DefaultCheckDirection

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L27)

```csharp
ref doorCheck_e DefaultCheckDirection { get; }
```

#### Property Value

- [doorCheck_e](/docs/api/shared/schemadefinitions/doorcheck_e)

### Distance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L19)

```csharp
ref float Distance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EntityBlocker

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L51)

```csharp
ref CHandle<CEntityBlocker> EntityBlocker { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CEntityBlocker](/docs/api/shared/schemadefinitions/centityblocker)>

### ForwardBoundsMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L43)

```csharp
ref Vector ForwardBoundsMax { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### ForwardBoundsMin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L41)

```csharp
ref Vector ForwardBoundsMin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Goal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L39)

```csharp
ref QAngle Goal { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### OpenDirection

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L23)

```csharp
ref PropDoorRotatingOpenDirection_e OpenDirection { get; }
```

#### Property Value

- [PropDoorRotatingOpenDirection_e](/docs/api/shared/schemadefinitions/propdoorrotatingopendirection_e)

### RotationAjarDeprecated

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L31)

```csharp
ref QAngle RotationAjarDeprecated { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### RotationClosed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L33)

```csharp
ref QAngle RotationClosed { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### RotationOpenBack

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L37)

```csharp
ref QAngle RotationOpenBack { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### RotationOpenForward

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L35)

```csharp
ref QAngle RotationOpenForward { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### SpawnPosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotating.cs#L21)

```csharp
ref PropDoorRotatingSpawnPos_t SpawnPosition { get; }
```

#### Property Value

- [PropDoorRotatingSpawnPos_t](/docs/api/shared/schemadefinitions/propdoorrotatingspawnpos_t)

