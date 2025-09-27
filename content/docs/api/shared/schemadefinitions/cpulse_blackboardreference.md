---
title: CPulse_BlackboardReference
---

```csharp
public interface CPulse_BlackboardReference : ISchemaClass<CPulse_BlackboardReference>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**BlackboardResource** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_BlackboardReference.cs#L16)

```csharp
ref CStrongHandle<InfoForResourceTypeIPulseGraphDef> BlackboardResource { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIPulseGraphDef](/docs/api/shared/schemadefinitions/infoforresourcetypeipulsegraphdef)>

**BlackboardResource1** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_BlackboardReference.cs#L19)

```csharp
SchemaUntypedField BlackboardResource1 { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

**NodeID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_BlackboardReference.cs#L21)

```csharp
PulseDocNodeID_t NodeID { get; }
```

#### Property Value

- [PulseDocNodeID_t](/docs/api/shared/schemadefinitions/pulsedocnodeid_t)

**NodeName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_BlackboardReference.cs#L23)

```csharp
ref CGlobalSymbol NodeName { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

