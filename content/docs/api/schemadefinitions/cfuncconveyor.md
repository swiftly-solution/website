---
title: CFuncConveyor
---

# Interface CFuncConveyor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CFuncConveyor : CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CFuncConveyor>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseModelEntity](/docs/api/schemadefinitions/cbasemodelentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseModelEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CFuncConveyor>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ConveyorModels

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L18)

```csharp
string ConveyorModels { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ConveyorModels1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L34)

```csharp
ref CUtlVector<CHandle<CBaseEntity>> ConveyorModels1 { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>>

### MoveDirEntitySpace

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L24)

```csharp
ref Vector MoveDirEntitySpace { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### MoveEntitySpace

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L22)

```csharp
ref QAngle MoveEntitySpace { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### TargetSpeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L26)

```csharp
ref float TargetSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TransitionDurationSeconds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L20)

```csharp
ref float TransitionDurationSeconds { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TransitionDurationTicks

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L30)

```csharp
ref int TransitionDurationTicks { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TransitionStartSpeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L32)

```csharp
ref float TransitionStartSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TransitionStartTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L28)

```csharp
GameTick_t TransitionStartTick { get; }
```

#### Property Value

- [GameTick_t](/docs/api/schemadefinitions/gametick_t)

## Methods

### ConveyorModels1Updated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L41)

```csharp
void ConveyorModels1Updated()
```

### MoveDirEntitySpaceUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L36)

```csharp
void MoveDirEntitySpaceUpdated()
```

### TargetSpeedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L37)

```csharp
void TargetSpeedUpdated()
```

### TransitionDurationTicksUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L39)

```csharp
void TransitionDurationTicksUpdated()
```

### TransitionStartSpeedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L40)

```csharp
void TransitionStartSpeedUpdated()
```

### TransitionStartTickUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L38)

```csharp
void TransitionStartTickUpdated()
```

