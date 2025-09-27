---
title: PulseScriptedSequenceData_t
---

```csharp
public interface PulseScriptedSequenceData_t : ISchemaClass<PulseScriptedSequenceData_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**ActorID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L16)

```csharp
ref int ActorID { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**EntrySequence** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L20)

```csharp
ref CUtlString EntrySequence { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

**ExitSequence** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L24)

```csharp
ref CUtlString ExitSequence { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

**HeldWeaponBehavior** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L30)

```csharp
ref ScriptedHeldWeaponBehavior_t HeldWeaponBehavior { get; }
```

#### Property Value

- [ScriptedHeldWeaponBehavior_t](/docs/api/shared/schemadefinitions/scriptedheldweaponbehavior_t)

**IgnoreLookAt** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L38)

```csharp
ref bool IgnoreLookAt { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**LoopActionSequence** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L34)

```csharp
ref bool LoopActionSequence { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**LoopPostIdleSequence** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L36)

```csharp
ref bool LoopPostIdleSequence { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**LoopPreIdleSequence** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L32)

```csharp
ref bool LoopPreIdleSequence { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**MoveTo** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L26)

```csharp
ref ScriptedMoveTo_t MoveTo { get; }
```

#### Property Value

- [ScriptedMoveTo_t](/docs/api/shared/schemadefinitions/scriptedmoveto_t)

**MoveToGait** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L28)

```csharp
ref SharedMovementGait_t MoveToGait { get; }
```

#### Property Value

- [SharedMovementGait_t](/docs/api/shared/schemadefinitions/sharedmovementgait_t)

**PreIdleSequence** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L18)

```csharp
ref CUtlString PreIdleSequence { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

**Sequence** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L22)

```csharp
ref CUtlString Sequence { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

