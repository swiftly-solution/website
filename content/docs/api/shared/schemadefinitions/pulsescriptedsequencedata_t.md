---
title: PulseScriptedSequenceData_t
---

```csharp
public interface PulseScriptedSequenceData_t : ISchemaClass<PulseScriptedSequenceData_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ActorID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L17)

```csharp
ref int ActorID { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EntrySequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L21)

```csharp
string EntrySequence { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ExitSequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L25)

```csharp
string ExitSequence { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### HeldWeaponBehavior

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L31)

```csharp
ref ScriptedHeldWeaponBehavior_t HeldWeaponBehavior { get; }
```

#### Property Value

- [ScriptedHeldWeaponBehavior_t](/docs/api/shared/schemadefinitions/scriptedheldweaponbehavior_t)

### IgnoreLookAt

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L39)

```csharp
ref bool IgnoreLookAt { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LoopActionSequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L35)

```csharp
ref bool LoopActionSequence { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LoopPostIdleSequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L37)

```csharp
ref bool LoopPostIdleSequence { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LoopPreIdleSequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L33)

```csharp
ref bool LoopPreIdleSequence { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MoveTo

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L27)

```csharp
ref ScriptedMoveTo_t MoveTo { get; }
```

#### Property Value

- [ScriptedMoveTo_t](/docs/api/shared/schemadefinitions/scriptedmoveto_t)

### MoveToGait

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L29)

```csharp
ref SharedMovementGait_t MoveToGait { get; }
```

#### Property Value

- [SharedMovementGait_t](/docs/api/shared/schemadefinitions/sharedmovementgait_t)

### PreIdleSequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L19)

```csharp
string PreIdleSequence { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Sequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseScriptedSequenceData_t.cs#L23)

```csharp
string Sequence { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

