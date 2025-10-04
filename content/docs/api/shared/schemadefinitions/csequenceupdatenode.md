---
title: CSequenceUpdateNode
---

```csharp
public interface CSequenceUpdateNode : CSequenceUpdateNodeBase, CLeafUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CLeafUpdateNode>, ISchemaClass<CSequenceUpdateNodeBase>, ISchemaClass<CSequenceUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Duration** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceUpdateNode.cs#L18)

```csharp
ref float Duration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**ParamSpans** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceUpdateNode.cs#L20)

```csharp
CParamSpanUpdater ParamSpans { get; }
```

#### Property Value

- [CParamSpanUpdater](/docs/api/shared/schemadefinitions/cparamspanupdater)

**Sequence** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceUpdateNode.cs#L16)

```csharp
HSequence Sequence { get; }
```

#### Property Value

- [HSequence](/docs/api/shared/schemadefinitions/hsequence)

**Tags** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceUpdateNode.cs#L23)

```csharp
ref CUtlVector Tags { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

