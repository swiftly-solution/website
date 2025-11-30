---
title: CAnimStateMachineUpdater
---

# Interface CAnimStateMachineUpdater

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimStateMachineUpdater.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CAnimStateMachineUpdater : ISchemaClass<CAnimStateMachineUpdater>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CAnimStateMachineUpdater>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### StartStateIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimStateMachineUpdater.cs#L22)

```csharp
ref int StartStateIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### States

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimStateMachineUpdater.cs#L18)

```csharp
ref CUtlVector<CStateUpdateData> States { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CStateUpdateData](/docs/api/schemadefinitions/cstateupdatedata)>

### Transitions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimStateMachineUpdater.cs#L20)

```csharp
ref CUtlVector<CTransitionUpdateData> Transitions { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CTransitionUpdateData](/docs/api/schemadefinitions/ctransitionupdatedata)>

