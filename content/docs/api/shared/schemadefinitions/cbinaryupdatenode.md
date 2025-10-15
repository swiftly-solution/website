---
title: CBinaryUpdateNode
---

```csharp
public interface CBinaryUpdateNode : CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CBinaryUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Child1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBinaryUpdateNode.cs#L17)

```csharp
CAnimUpdateNodeRef Child1 { get; }
```

#### Property Value

- [CAnimUpdateNodeRef](/docs/api/shared/schemadefinitions/canimupdatenoderef)

### Child2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBinaryUpdateNode.cs#L19)

```csharp
CAnimUpdateNodeRef Child2 { get; }
```

#### Property Value

- [CAnimUpdateNodeRef](/docs/api/shared/schemadefinitions/canimupdatenoderef)

### ResetChild1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBinaryUpdateNode.cs#L25)

```csharp
ref bool ResetChild1 { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ResetChild2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBinaryUpdateNode.cs#L27)

```csharp
ref bool ResetChild2 { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TimingBehavior

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBinaryUpdateNode.cs#L21)

```csharp
ref BinaryNodeTiming TimingBehavior { get; }
```

#### Property Value

- [BinaryNodeTiming](/docs/api/shared/schemadefinitions/binarynodetiming)

### TimingBlend

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBinaryUpdateNode.cs#L23)

```csharp
ref float TimingBlend { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

