---
title: CPulseGraphDef
---

```csharp
public interface CPulseGraphDef : ISchemaClass<CPulseGraphDef>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BlackboardReferences

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L46)

```csharp
ref CUtlVector<CPulse_BlackboardReference> BlackboardReferences { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CPulse_BlackboardReference](/docs/api/shared/schemadefinitions/cpulse_blackboardreference)>

### CallInfos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L40)

```csharp
ref CUtlVector<PointerTo<CPulse_CallInfo>> CallInfos { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CPulse_CallInfo](/docs/api/shared/schemadefinitions/cpulse_callinfo)>>

### Cells

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L32)

```csharp
ref CUtlVector<PointerTo<CPulseCell_Base>> Cells { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CPulseCell_Base](/docs/api/shared/schemadefinitions/cpulsecell_base)>>

### Chunks

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L30)

```csharp
ref CUtlVector<PointerTo<CPulse_Chunk>> Chunks { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CPulse_Chunk](/docs/api/shared/schemadefinitions/cpulse_chunk)>>

### Constants

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L42)

```csharp
ref CUtlVector<CPulse_Constant> Constants { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CPulse_Constant](/docs/api/shared/schemadefinitions/cpulse_constant)>

### DomainIdentifier

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L19)

```csharp
SchemaUntypedField DomainIdentifier { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### DomainSubType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L22)

```csharp
SchemaUntypedField DomainSubType { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### DomainValues

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L44)

```csharp
ref CUtlVector<CPulse_DomainValue> DomainValues { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CPulse_DomainValue](/docs/api/shared/schemadefinitions/cpulse_domainvalue)>

### InvokeBindings

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L38)

```csharp
ref CUtlVector<PointerTo<CPulse_InvokeBinding>> InvokeBindings { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CPulse_InvokeBinding](/docs/api/shared/schemadefinitions/cpulse_invokebinding)>>

### OutputConnections

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L48)

```csharp
ref CUtlVector<PointerTo<CPulse_OutputConnection>> OutputConnections { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CPulse_OutputConnection](/docs/api/shared/schemadefinitions/cpulse_outputconnection)>>

### ParentMapName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L25)

```csharp
SchemaUntypedField ParentMapName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### ParentXmlName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L28)

```csharp
SchemaUntypedField ParentXmlName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### PublicOutputs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L36)

```csharp
ref CUtlVector<CPulse_PublicOutput> PublicOutputs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CPulse_PublicOutput](/docs/api/shared/schemadefinitions/cpulse_publicoutput)>

### Vars

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L34)

```csharp
ref CUtlVector<CPulse_Variable> Vars { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CPulse_Variable](/docs/api/shared/schemadefinitions/cpulse_variable)>

