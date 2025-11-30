---
title: CPulseGraphInstance_TestDomain
---

# Interface CPulseGraphInstance_TestDomain

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphInstance_TestDomain.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPulseGraphInstance_TestDomain : CBasePulseGraphInstance, ISchemaClass<CBasePulseGraphInstance>, ISchemaClass<CPulseGraphInstance_TestDomain>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBasePulseGraphInstance](/docs/api/schemadefinitions/cbasepulsegraphinstance)
- [ISchemaClass<CBasePulseGraphInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPulseGraphInstance_TestDomain>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CursorsTerminatedDueToMaxInstructions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphInstance_TestDomain.cs#L28)

```csharp
ref int CursorsTerminatedDueToMaxInstructions { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ExpectingCursorTerminatedDueToMaxInstructions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphInstance_TestDomain.cs#L26)

```csharp
ref bool ExpectingCursorTerminatedDueToMaxInstructions { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ExpectingToDestroyWithYieldedCursors

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphInstance_TestDomain.cs#L22)

```csharp
ref bool ExpectingToDestroyWithYieldedCursors { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ExplicitTimeStepping

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphInstance_TestDomain.cs#L20)

```csharp
ref bool ExplicitTimeStepping { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsRunningUnitTests

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphInstance_TestDomain.cs#L18)

```csharp
ref bool IsRunningUnitTests { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NextValidateIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphInstance_TestDomain.cs#L30)

```csharp
ref int NextValidateIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### QuietTracepoints

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphInstance_TestDomain.cs#L24)

```csharp
ref bool QuietTracepoints { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TestYesOrNoPath

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphInstance_TestDomain.cs#L34)

```csharp
ref bool TestYesOrNoPath { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Tracepoints

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphInstance_TestDomain.cs#L32)

```csharp
ref CUtlVector<CUtlString> Tracepoints { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CUtlString](/docs/api/natives/cutlstring)>

