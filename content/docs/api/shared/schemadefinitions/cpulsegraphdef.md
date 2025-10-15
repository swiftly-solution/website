---
title: CPulseGraphDef
---

```csharp
public interface CPulseGraphDef : ISchemaClass<CPulseGraphDef>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BlackboardReferences

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L45)

```csharp
ref CUtlVector<CPulse_BlackboardReference> BlackboardReferences { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CPulse_BlackboardReference](/docs/api/shared/schemadefinitions/cpulse_blackboardreference)>

### CallInfos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L39)

```csharp
ref CUtlVector<PointerTo<CPulse_CallInfo>> CallInfos { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CPulse_CallInfo](/docs/api/shared/schemadefinitions/cpulse_callinfo)>>

### Cells

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L31)

```csharp
ref CUtlVector<PointerTo<CPulseCell_Base>> Cells { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CPulseCell_Base](/docs/api/shared/schemadefinitions/cpulsecell_base)>>

### Chunks

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L29)

```csharp
ref CUtlVector<PointerTo<CPulse_Chunk>> Chunks { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CPulse_Chunk](/docs/api/shared/schemadefinitions/cpulse_chunk)>>

### Constants

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L41)

```csharp
ref CUtlVector<CPulse_Constant> Constants { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CPulse_Constant](/docs/api/shared/schemadefinitions/cpulse_constant)>

### DomainIdentifier

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L18)

```csharp
SchemaUntypedField DomainIdentifier { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### DomainSubType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L21)

```csharp
SchemaUntypedField DomainSubType { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### DomainValues

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L43)

```csharp
ref CUtlVector<CPulse_DomainValue> DomainValues { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CPulse_DomainValue](/docs/api/shared/schemadefinitions/cpulse_domainvalue)>

### InvokeBindings

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L37)

```csharp
ref CUtlVector<PointerTo<CPulse_InvokeBinding>> InvokeBindings { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CPulse_InvokeBinding](/docs/api/shared/schemadefinitions/cpulse_invokebinding)>>

### OutputConnections

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L47)

```csharp
ref CUtlVector<PointerTo<CPulse_OutputConnection>> OutputConnections { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CPulse_OutputConnection](/docs/api/shared/schemadefinitions/cpulse_outputconnection)>>

### ParentMapName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L24)

```csharp
SchemaUntypedField ParentMapName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### ParentXmlName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L27)

```csharp
SchemaUntypedField ParentXmlName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### PublicOutputs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L35)

```csharp
ref CUtlVector<CPulse_PublicOutput> PublicOutputs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CPulse_PublicOutput](/docs/api/shared/schemadefinitions/cpulse_publicoutput)>

### Vars

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L33)

```csharp
ref CUtlVector<CPulse_Variable> Vars { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CPulse_Variable](/docs/api/shared/schemadefinitions/cpulse_variable)>

