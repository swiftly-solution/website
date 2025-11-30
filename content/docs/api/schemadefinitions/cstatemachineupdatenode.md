---
title: CStateMachineUpdateNode
---

# Interface CStateMachineUpdateNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateMachineUpdateNode.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CStateMachineUpdateNode : CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CStateMachineUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CAnimUpdateNodeBase](/docs/api/schemadefinitions/canimupdatenodebase)
- [ISchemaClass<CAnimUpdateNodeBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CStateMachineUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BlockWaningTags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateMachineUpdateNode.cs#L24)

```csharp
ref bool BlockWaningTags { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LockStateWhenWaning

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateMachineUpdateNode.cs#L26)

```csharp
ref bool LockStateWhenWaning { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ResetWhenActivated

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateMachineUpdateNode.cs#L28)

```csharp
ref bool ResetWhenActivated { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StateData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateMachineUpdateNode.cs#L20)

```csharp
ref CUtlVector<CStateNodeStateData> StateData { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CStateNodeStateData](/docs/api/schemadefinitions/cstatenodestatedata)>

### StateMachine

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateMachineUpdateNode.cs#L18)

```csharp
CAnimStateMachineUpdater StateMachine { get; }
```

#### Property Value

- [CAnimStateMachineUpdater](/docs/api/schemadefinitions/canimstatemachineupdater)

### TransitionData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateMachineUpdateNode.cs#L22)

```csharp
ref CUtlVector<CStateNodeTransitionData> TransitionData { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CStateNodeTransitionData](/docs/api/schemadefinitions/cstatenodetransitiondata)>

