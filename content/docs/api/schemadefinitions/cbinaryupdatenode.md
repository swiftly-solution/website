---
title: CBinaryUpdateNode
---

# Interface CBinaryUpdateNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBinaryUpdateNode.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBinaryUpdateNode : CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CBinaryUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CAnimUpdateNodeBase](/docs/api/schemadefinitions/canimupdatenodebase)
- [ISchemaClass<CAnimUpdateNodeBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBinaryUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Child1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBinaryUpdateNode.cs#L18)

```csharp
CAnimUpdateNodeRef Child1 { get; }
```

#### Property Value

- [CAnimUpdateNodeRef](/docs/api/schemadefinitions/canimupdatenoderef)

### Child2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBinaryUpdateNode.cs#L20)

```csharp
CAnimUpdateNodeRef Child2 { get; }
```

#### Property Value

- [CAnimUpdateNodeRef](/docs/api/schemadefinitions/canimupdatenoderef)

### ResetChild1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBinaryUpdateNode.cs#L26)

```csharp
ref bool ResetChild1 { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ResetChild2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBinaryUpdateNode.cs#L28)

```csharp
ref bool ResetChild2 { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TimingBehavior

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBinaryUpdateNode.cs#L22)

```csharp
ref BinaryNodeTiming TimingBehavior { get; }
```

#### Property Value

- [BinaryNodeTiming](/docs/api/schemadefinitions/binarynodetiming)

### TimingBlend

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBinaryUpdateNode.cs#L24)

```csharp
ref float TimingBlend { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

