---
title: CFuncConveyor
---

```csharp
public interface CFuncConveyor : CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CFuncConveyor>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**ConveyorModels** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L16)

```csharp
string ConveyorModels { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**ConveyorModels1** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L32)

```csharp
ref CUtlVector<CHandle<CBaseEntity>> ConveyorModels1 { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>>

**MoveDirEntitySpace** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L22)

```csharp
ref Vector MoveDirEntitySpace { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**MoveEntitySpace** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L20)

```csharp
ref QAngle MoveEntitySpace { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

**TargetSpeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L24)

```csharp
ref float TargetSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**TransitionDurationSeconds** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L18)

```csharp
ref float TransitionDurationSeconds { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**TransitionDurationTicks** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L28)

```csharp
ref int TransitionDurationTicks { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**TransitionStartSpeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L30)

```csharp
ref float TransitionStartSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**TransitionStartTick** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L26)

```csharp
GameTick_t TransitionStartTick { get; }
```

#### Property Value

- [GameTick_t](/docs/api/shared/schemadefinitions/gametick_t)

## Methods

**ConveyorModels1Updated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L39)

```csharp
void ConveyorModels1Updated()
```

**MoveDirEntitySpaceUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L34)

```csharp
void MoveDirEntitySpaceUpdated()
```

**TargetSpeedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L35)

```csharp
void TargetSpeedUpdated()
```

**TransitionDurationTicksUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L37)

```csharp
void TransitionDurationTicksUpdated()
```

**TransitionStartSpeedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L38)

```csharp
void TransitionStartSpeedUpdated()
```

**TransitionStartTickUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncConveyor.cs#L36)

```csharp
void TransitionStartTickUpdated()
```

