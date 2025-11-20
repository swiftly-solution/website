---
title: CAnimStateMachineUpdater
---

```csharp
public interface CAnimStateMachineUpdater : ISchemaClass<CAnimStateMachineUpdater>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### StartStateIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimStateMachineUpdater.cs#L22)

```csharp
ref int StartStateIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### States

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimStateMachineUpdater.cs#L18)

```csharp
ref CUtlVector<CStateUpdateData> States { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CStateUpdateData](/docs/api/shared/schemadefinitions/cstateupdatedata)>

### Transitions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimStateMachineUpdater.cs#L20)

```csharp
ref CUtlVector<CTransitionUpdateData> Transitions { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CTransitionUpdateData](/docs/api/shared/schemadefinitions/ctransitionupdatedata)>

