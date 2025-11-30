---
title: CPulse_BlackboardReference
---

# Interface CPulse_BlackboardReference

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_BlackboardReference.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPulse_BlackboardReference : ISchemaClass<CPulse_BlackboardReference>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CPulse_BlackboardReference>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BlackboardResource

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_BlackboardReference.cs#L18)

```csharp
ref CStrongHandle<InfoForResourceTypeIPulseGraphDef> BlackboardResource { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeIPulseGraphDef](/docs/api/schemadefinitions/infoforresourcetypeipulsegraphdef)>

### BlackboardResource1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_BlackboardReference.cs#L21)

```csharp
SchemaUntypedField BlackboardResource1 { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### NodeID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_BlackboardReference.cs#L23)

```csharp
PulseDocNodeID_t NodeID { get; }
```

#### Property Value

- [PulseDocNodeID_t](/docs/api/schemadefinitions/pulsedocnodeid_t)

### NodeName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_BlackboardReference.cs#L25)

```csharp
ref CGlobalSymbol NodeName { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/natives/cglobalsymbol)

