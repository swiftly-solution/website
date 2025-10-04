---
title: CPulseGraphDef
---

```csharp
public interface CPulseGraphDef : ISchemaClass<CPulseGraphDef>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**BlackboardReferences** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L49)

```csharp
ref CUtlVector BlackboardReferences { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

**CallInfos** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L40)

```csharp
ref CUtlVector<PointerTo<CPulse_CallInfo>> CallInfos { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CPulse_CallInfo](/docs/api/shared/schemadefinitions/cpulse_callinfo)>>

**Cells** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L30)

```csharp
ref CUtlVector<PointerTo<CPulseCell_Base>> Cells { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CPulseCell_Base](/docs/api/shared/schemadefinitions/cpulsecell_base)>>

**Chunks** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L28)

```csharp
ref CUtlVector<PointerTo<CPulse_Chunk>> Chunks { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CPulse_Chunk](/docs/api/shared/schemadefinitions/cpulse_chunk)>>

**Constants** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L43)

```csharp
ref CUtlVector Constants { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

**DomainIdentifier** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L17)

```csharp
SchemaUntypedField DomainIdentifier { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

**DomainSubType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L20)

```csharp
SchemaUntypedField DomainSubType { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

**DomainValues** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L46)

```csharp
ref CUtlVector DomainValues { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

**InvokeBindings** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L38)

```csharp
ref CUtlVector<PointerTo<CPulse_InvokeBinding>> InvokeBindings { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CPulse_InvokeBinding](/docs/api/shared/schemadefinitions/cpulse_invokebinding)>>

**OutputConnections** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L51)

```csharp
ref CUtlVector<PointerTo<CPulse_OutputConnection>> OutputConnections { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CPulse_OutputConnection](/docs/api/shared/schemadefinitions/cpulse_outputconnection)>>

**ParentMapName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L23)

```csharp
SchemaUntypedField ParentMapName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

**ParentXmlName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L26)

```csharp
SchemaUntypedField ParentXmlName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

**PublicOutputs** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L36)

```csharp
ref CUtlVector PublicOutputs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

**Vars** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L33)

```csharp
ref CUtlVector Vars { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

