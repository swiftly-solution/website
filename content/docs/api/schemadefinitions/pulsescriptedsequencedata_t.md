---
title: PulseScriptedSequenceData_t
---

# Interface PulseScriptedSequenceData_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface PulseScriptedSequenceData_t : ISchemaClass<PulseScriptedSequenceData_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<PulseScriptedSequenceData_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ActorID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L18)

```csharp
ref int ActorID { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EntrySequence

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L22)

```csharp
string EntrySequence { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ExitSequence

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L26)

```csharp
string ExitSequence { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### HeldWeaponBehavior

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L32)

```csharp
ref ScriptedHeldWeaponBehavior_t HeldWeaponBehavior { get; }
```

#### Property Value

- [ScriptedHeldWeaponBehavior_t](/docs/api/schemadefinitions/scriptedheldweaponbehavior_t)

### IgnoreLookAt

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L40)

```csharp
ref bool IgnoreLookAt { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LoopActionSequence

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L36)

```csharp
ref bool LoopActionSequence { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LoopPostIdleSequence

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L38)

```csharp
ref bool LoopPostIdleSequence { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LoopPreIdleSequence

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L34)

```csharp
ref bool LoopPreIdleSequence { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MoveTo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L28)

```csharp
ref ScriptedMoveTo_t MoveTo { get; }
```

#### Property Value

- [ScriptedMoveTo_t](/docs/api/schemadefinitions/scriptedmoveto_t)

### MoveToGait

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L30)

```csharp
ref SharedMovementGait_t MoveToGait { get; }
```

#### Property Value

- [SharedMovementGait_t](/docs/api/schemadefinitions/sharedmovementgait_t)

### PreIdleSequence

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L20)

```csharp
string PreIdleSequence { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Sequence

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L24)

```csharp
string Sequence { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

