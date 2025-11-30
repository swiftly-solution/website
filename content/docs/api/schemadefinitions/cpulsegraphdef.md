---
title: CPulseGraphDef
---

# Interface CPulseGraphDef

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPulseGraphDef : ISchemaClass<CPulseGraphDef>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CPulseGraphDef>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BlackboardReferences

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L46)

```csharp
ref CUtlVector<CPulse_BlackboardReference> BlackboardReferences { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CPulse_BlackboardReference](/docs/api/schemadefinitions/cpulse_blackboardreference)>

### CallInfos

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L40)

```csharp
ref CUtlVector<PointerTo<CPulse_CallInfo>> CallInfos { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[CPulse_CallInfo](/docs/api/schemadefinitions/cpulse_callinfo)>>

### Cells

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L32)

```csharp
ref CUtlVector<PointerTo<CPulseCell_Base>> Cells { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[CPulseCell_Base](/docs/api/schemadefinitions/cpulsecell_base)>>

### Chunks

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L30)

```csharp
ref CUtlVector<PointerTo<CPulse_Chunk>> Chunks { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[CPulse_Chunk](/docs/api/schemadefinitions/cpulse_chunk)>>

### Constants

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L42)

```csharp
ref CUtlVector<CPulse_Constant> Constants { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CPulse_Constant](/docs/api/schemadefinitions/cpulse_constant)>

### DomainIdentifier

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L19)

```csharp
SchemaUntypedField DomainIdentifier { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### DomainSubType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L22)

```csharp
SchemaUntypedField DomainSubType { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### DomainValues

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L44)

```csharp
ref CUtlVector<CPulse_DomainValue> DomainValues { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CPulse_DomainValue](/docs/api/schemadefinitions/cpulse_domainvalue)>

### InvokeBindings

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L38)

```csharp
ref CUtlVector<PointerTo<CPulse_InvokeBinding>> InvokeBindings { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[CPulse_InvokeBinding](/docs/api/schemadefinitions/cpulse_invokebinding)>>

### OutputConnections

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L48)

```csharp
ref CUtlVector<PointerTo<CPulse_OutputConnection>> OutputConnections { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[CPulse_OutputConnection](/docs/api/schemadefinitions/cpulse_outputconnection)>>

### ParentMapName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L25)

```csharp
SchemaUntypedField ParentMapName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### ParentXmlName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L28)

```csharp
SchemaUntypedField ParentXmlName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### PublicOutputs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L36)

```csharp
ref CUtlVector<CPulse_PublicOutput> PublicOutputs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CPulse_PublicOutput](/docs/api/schemadefinitions/cpulse_publicoutput)>

### Vars

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseGraphDef.cs#L34)

```csharp
ref CUtlVector<CPulse_Variable> Vars { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CPulse_Variable](/docs/api/schemadefinitions/cpulse_variable)>

