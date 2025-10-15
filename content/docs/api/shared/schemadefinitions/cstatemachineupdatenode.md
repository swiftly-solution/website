---
title: CStateMachineUpdateNode
---

```csharp
public interface CStateMachineUpdateNode : CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CStateMachineUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BlockWaningTags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateMachineUpdateNode.cs#L23)

```csharp
ref bool BlockWaningTags { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LockStateWhenWaning

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateMachineUpdateNode.cs#L25)

```csharp
ref bool LockStateWhenWaning { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ResetWhenActivated

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateMachineUpdateNode.cs#L27)

```csharp
ref bool ResetWhenActivated { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StateData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateMachineUpdateNode.cs#L19)

```csharp
ref CUtlVector<CStateNodeStateData> StateData { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CStateNodeStateData](/docs/api/shared/schemadefinitions/cstatenodestatedata)>

### StateMachine

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateMachineUpdateNode.cs#L17)

```csharp
CAnimStateMachineUpdater StateMachine { get; }
```

#### Property Value

- [CAnimStateMachineUpdater](/docs/api/shared/schemadefinitions/canimstatemachineupdater)

### TransitionData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateMachineUpdateNode.cs#L21)

```csharp
ref CUtlVector<CStateNodeTransitionData> TransitionData { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CStateNodeTransitionData](/docs/api/shared/schemadefinitions/cstatenodetransitiondata)>

