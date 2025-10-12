---
title: CStateMachineUpdateNode
---

```csharp
public interface CStateMachineUpdateNode : CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CStateMachineUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BlockWaningTags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateMachineUpdateNode.cs#L24)

```csharp
ref bool BlockWaningTags { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LockStateWhenWaning

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateMachineUpdateNode.cs#L26)

```csharp
ref bool LockStateWhenWaning { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ResetWhenActivated

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateMachineUpdateNode.cs#L28)

```csharp
ref bool ResetWhenActivated { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StateData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateMachineUpdateNode.cs#L19)

```csharp
ref CUtlVector StateData { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### StateMachine

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateMachineUpdateNode.cs#L16)

```csharp
CAnimStateMachineUpdater StateMachine { get; }
```

#### Property Value

- [CAnimStateMachineUpdater](/docs/api/shared/schemadefinitions/canimstatemachineupdater)

### TransitionData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateMachineUpdateNode.cs#L22)

```csharp
ref CUtlVector TransitionData { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

