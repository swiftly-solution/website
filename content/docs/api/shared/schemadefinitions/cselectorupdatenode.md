---
title: CSelectorUpdateNode
---

```csharp
public interface CSelectorUpdateNode : CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CSelectorUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BlendCurve

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSelectorUpdateNode.cs#L22)

```csharp
CBlendCurve BlendCurve { get; }
```

#### Property Value

- [CBlendCurve](/docs/api/shared/schemadefinitions/cblendcurve)

### BlendTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSelectorUpdateNode.cs#L25)

```csharp
SchemaUntypedField BlendTime { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Children

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSelectorUpdateNode.cs#L18)

```csharp
ref CUtlVector<CAnimUpdateNodeRef> Children { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimUpdateNodeRef](/docs/api/shared/schemadefinitions/canimupdatenoderef)>

### LockWhenWaning

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSelectorUpdateNode.cs#L35)

```csharp
ref bool LockWhenWaning { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Parameter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSelectorUpdateNode.cs#L27)

```csharp
CAnimParamHandle Parameter { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### ResetOnChange

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSelectorUpdateNode.cs#L33)

```csharp
ref bool ResetOnChange { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SyncCyclesOnChange

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSelectorUpdateNode.cs#L37)

```csharp
ref bool SyncCyclesOnChange { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TagBehavior

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSelectorUpdateNode.cs#L31)

```csharp
ref SelectorTagBehavior_t TagBehavior { get; }
```

#### Property Value

- [SelectorTagBehavior_t](/docs/api/shared/schemadefinitions/selectortagbehavior_t)

### TagIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSelectorUpdateNode.cs#L29)

```csharp
ref int TagIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Tags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSelectorUpdateNode.cs#L20)

```csharp
ref CUtlVector<byte> Tags { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

