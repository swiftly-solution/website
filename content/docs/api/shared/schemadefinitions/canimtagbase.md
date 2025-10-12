---
title: CAnimTagBase
---

```csharp
public interface CAnimTagBase : ISchemaClass<CAnimTagBase>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **Comment** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimTagBase.cs#L18)

```csharp
string Comment { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **Group** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimTagBase.cs#L20)

```csharp
ref CGlobalSymbol Group { get; }
```

- Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### **IsReferenced** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimTagBase.cs#L24)

```csharp
ref bool IsReferenced { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Name** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimTagBase.cs#L16)

```csharp
ref CGlobalSymbol Name { get; }
```

- Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### **TagID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimTagBase.cs#L22)

```csharp
AnimTagID TagID { get; }
```

- Property Value

- [AnimTagID](/docs/api/shared/schemadefinitions/animtagid)

